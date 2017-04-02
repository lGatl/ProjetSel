export const annonces={
	liste:new ReactiveVar([]),
	recup:function(cbk){
		Meteor.call('listeAnnonces',Meteor.userId(),(err,res)=>{
			if(err){
				cbk(err)
				console.log('erreur dans recup')
			}else{
				if(res){

					annonces.liste.set(res)
					cbk(res)
				}
			}
		})
	},
	sauve:(aSauv)=>{
		Meteor.call('sauvegardeAnnonces',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{
			}

		})

	},
	supprime:(aSuppr)=>{
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
	},
	ajout:(ann)=>{
		Meteor.call('ajoutAnnonce', ann ,(err,res)=>{
			if(err||res==false){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter l'annonce" ,
					type:'error'
				})
			}else{
				annonces.recup((res)=>{if(res){}else{}})
				Bert.alert({
					title:"Annonce sauvegardé",
					message:"Votre annonce "+ann.titreDeLAnnonce+" a été sauvegardé" ,
					type:'success'
				})
			}
		})

	}

}

annonces.recup((res)=>{if(res){}})
