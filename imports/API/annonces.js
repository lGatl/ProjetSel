
	const liste=new ReactiveVar([])
	const recup=(cbk)=>{
		Meteor.call('listeAnnonces',Meteor.userId(),(err,res)=>{
			if(err){
				cbk(err)
				console.log('erreur dans recup')
			}else{
				if(res){

					liste.set(res)
					cbk(res)
				}
			}
		})
	}
	const sauve=(aSauv)=>{
		Meteor.call('sauvegardeAnnonces',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{
			}

		})
	}
	const supprime=(aSuppr)=>{
		Meteor.call('supprimeAnnonce', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer l'annonce" ,
					type:'error'
				})
			}else{
			}
		})
	}
	const ajout=(ann)=>{
		Meteor.call('ajoutAnnonce', ann ,(err,res)=>{
			if(err||res==false){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter l'annonce" ,
					type:'error'
				})
			}else{
				recup((res)=>{if(res){}else{}})
				Bert.alert({
					title:"Annonce sauvegardé",
					message:"Votre annonce "+ann.titreDeLAnnonce+" a été sauvegardé" ,
					type:'success'
				})
			}
		})
	}

recup((res)=>{if(res){}})
export const annonces={
	liste,
	recup,
	sauve,
	supprime,
	ajout
}
