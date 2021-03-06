
	const liste=new ReactiveVar([])
	const rev=new ReactiveVar([])
	const recup=(cbk)=>{
		Meteor.call('listePropositions',Meteor.userId(),(err,res)=>{
			if(err){
				cbk(err)
				console.log('erreur dans recup')
			}else{
				if(res){
					liste.set(res)
					rev.set(res.reverse())
					cbk(res)
				}
			}
		})
	}
	const sauve=(aSauv,cbk)=>{
		Meteor.call('sauvegardePropositions',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{
				cbk()
				recup((res)=>{if(res){}else{}})
			}

		})

	}
	const supprime=(aSuppr,cbk)=>{
		Meteor.call('supprimeProposition', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer la proposition" ,
					type:'error'
				})
			}else{

				Bert.alert({
					title:"Proposition supprimée",
					message:"Votre proposition a été supprimée" ,
					type:'success'
				})
				recup((res)=>{if(res){cbk()}else{}})
			}
		})
	}
	const ajout=(prop,cbk)=>{
		Meteor.call('ajoutProposition', prop ,(err,res)=>{
			if(err){
				cbk(err)
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter la proposition" ,
					type:'error'
				})
			}else{
				recup((res)=>{if(res){cbk(res)}else{}})
				Bert.alert({
					title:"Proposition sauvegardé",
					message:"Votre proposition a été sauvegardé" ,
					type:'success'
				})
			}
		})
	}

recup((res)=>{if(res){}})

export const propositions={
	liste,
	rev,
	recup,
	sauve,
	supprime,
	ajout
}
