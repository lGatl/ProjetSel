export const annonces={
	liste:new ReactiveVar([]),
	recup:function(){
		Meteor.call('listeAnnonces',Meteor.userId(),(err,res)=>{
			if(err){
				console.log('erreur dans recup')
			}else{
				if(res){

					annonces.liste.set(res)

				}
			}
		})
	},
	sauve:(aSauv)=>{
		Meteor.call('sauvegardeAnnonces',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{

				annonces.recup()
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
					annonces.recup()
			}
		})
	},
	ajout:(ann)=>{
		Meteor.call('ajoutAnnonce', ann ,(err,res)=>{
			if(err||res==false){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter l'article" ,
					type:'error'
				})
			}else{

				Bert.alert({
					title:"Article sauvegardé",
					message:"Votre annonce "+ann.titreDeLAnnonce+" a été sauvegardé" ,
					type:'success'
				})
				annonces.recup()
			}
		})

	}

}

annonces.recup()
