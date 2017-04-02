export const categories={
	liste:new ReactiveVar([]),
	recup:function(cbk){
		Meteor.call('listeCategories',(err,res)=>{
			if(err){
				cbk()
				console.log('erreur dans recup')
			}else{
				if(res){

					categories.liste.set(res)
					cbk(res)
				}
			}
		})
	},
	sauve:(aSauv)=>{
		Meteor.call('sauvegardeCategorie',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{
			}

		})

	},
	supprime:(aSuppr)=>{
		Meteor.call('supprimeCategorie', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer la categorie" ,
					type:'error'
				})
			}else{
			}
		})
	},
	ajout:(cat)=>{
		Meteor.call('ajoutCategorie', cat ,(err,res)=>{
			if(err||res==false){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter la categorie" ,
					type:'error'
				})
			}else{
				categories.recup((res)=>{if(res){cbk(res)}else{}})
				Bert.alert({
					title:"Categorie sauvegardé",
					message:"Votre annonce "+cat.titreDeLaCategorie+" a été sauvegardé" ,
					type:'success'
				})
			}
		})

	}

}

categories.recup((res)=>{if(res){}})
