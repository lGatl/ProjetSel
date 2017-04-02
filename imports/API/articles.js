export const articles={
	liste:new ReactiveVar([]),
	rev:new ReactiveVar([]),
	recup:function(cbk){
		Meteor.call('listeArticles',Meteor.userId(),(err,res)=>{
			if(err){
				cbk(err)
				console.log('erreur dans recup')
			}else{
				if(res){

					articles.liste.set(res)
					articles.rev.set(res.reverse())
					cbk(res)
				}
			}
		})
	},
	sauve:(aSauv)=>{

		Meteor.call('sauvegardeArticles',aSauv,(err,res)=>{
			if(err){

				console.log("err Sav")
			}else{


			}

		})

	},
	supprime:(aSuppr)=>{
		Meteor.call('supprimeArticle', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer l'article" ,
					type:'error'
				})
			}else{

			}
		})
	},
	ajout:(art,cbk)=>{

		Meteor.call('ajoutArticle', art ,(err,res)=>{
			if(err){
				cbk(err)
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter l'article" ,
					type:'error'
				})
			}else{
				articles.recup((res)=>{if(res){cbk(res)}else{}})
				Bert.alert({
					title:"Article sauvegardé",
					message:"Votre article "+art.title+" a été sauvegardé" ,
					type:'success'
				})


			}
		})

	}

}

articles.recup((res)=>{if(res){}})
