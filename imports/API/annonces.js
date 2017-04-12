
	const liste=new ReactiveVar([])
	const rev=new ReactiveVar([])
	const recup=(cbk)=>{
		Meteor.call('listeAnnonces',Meteor.userId(),(err,res)=>{
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
	const sauve=(aSauv)=>{
		Meteor.call('sauvegardeAnnonces',aSauv,(err,res)=>{
			if(err){
				console.log(err)
			}else{
				recup((res)=>{if(res){}else{}})
				Bert.alert({
					title:"Annonce modifiée",
					message:"Votre annonce a été modifiée" ,
					type:'success'
				})

			}

		})
	}

	const supprime=(aSuppr,cbk)=>{
		Meteor.call('supprimeAnnonce', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer l'annonce" ,
					type:'error'
				})
			}else{
				recup((res)=>{if(res){}else{}})
				cbk()
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
					message:"Votre annonce "+ann.titre+" a été sauvegardé" ,
					type:'success'
				})
			}
		})
	}
	const recup1=(titre,cbk)=>{
		Meteor.call('getAnnonce',titre,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:err.message,
					type: 'danger'
				})
			}else{
				cbk(err,res)
			}
		})
	}
	const recup1Id=(id,cbk)=>{
		Meteor.call('getAnnonceId',id,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:err.message,
					type: 'danger'
				})
			}else{
				cbk(err,res)
			}
		})
	}

recup((res)=>{if(res){}})
export const annonces={
	liste,
	recup,
	recup1,
	recup1Id,
	sauve,
	supprime,
	rev,
	ajout
}
