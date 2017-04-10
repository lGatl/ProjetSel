
	const liste=new ReactiveVar([])
	const rev=new ReactiveVar([])
	const recup=(cbk)=>{
		Meteor.call('listeArticles',Meteor.userId(),(err,res)=>{
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
		Meteor.call('sauvegardeArticles',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{}

		})

	}
	const supprime=(aSuppr)=>{
		Meteor.call('supprimeArticle', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer l'article" ,
					type:'error'
				})
			}else{}
		})
	}
	const ajout=(art,cbk)=>{
		Meteor.call('ajoutArticle', art ,(err,res)=>{
			if(err){
				cbk(err)
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter l'article" ,
					type:'error'
				})
			}else{
				recup((res)=>{if(res){cbk(res)}else{}})
				Bert.alert({
					title:"Article sauvegardé",
					message:"Votre article "+art.titre+" a été sauvegardé" ,
					type:'success'
				})
			}
		})
	}

recup((res)=>{if(res){}})

export const articles={
	liste,
	rev,
	recup,
	sauve,
	supprime,
	ajout
}
