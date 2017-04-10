
	const liste=new ReactiveVar([])
	const recup=(cbk)=>{
		Meteor.call('listeCategories',(err,res)=>{
			if(err){
				cbk()
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
		Meteor.call('sauvegardeCategorie',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{
			}
		})
	}
	const supprime=(aSuppr)=>{
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
	}
	const ajout=(cat,cbk)=>{
		Meteor.call('ajoutCategorie', cat ,(err,res)=>{
			if(err||res==false){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter la categorie" ,
					type:'error'
				})
			}else{
				recup((res)=>{if(res){cbk(res)}else{}})
				Bert.alert({
					title:"Categorie sauvegardé",
					message:"Votre annonce "+cat.titre+" a été sauvegardé" ,
					type:'success'
				})
			}
		})
	}



recup((res)=>{if(res){}})
export const categories={
	liste,
	recup,
	sauve,
	supprime,
	ajout,
}
