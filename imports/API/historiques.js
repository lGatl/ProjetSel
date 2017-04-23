
	const liste=new ReactiveVar([])
	const recup=(cbk)=>{
		Meteor.call('listeHistoriques',(err,res)=>{
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
		Meteor.call('sauvegardeHistorique',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{
			}
		})
	}
	const supprime=(aSuppr)=>{
		Meteor.call('supprimeHistorique', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer l'Historique" ,
					type:'error'
				})
			}else{
			}
		})
	}
	const ajout=(hist,cbk)=>{
		Meteor.call('ajoutHistorique', hist ,(err,res)=>{
			if(err||res==false){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter à l'historique" ,
					type:'error'
				})
			}else{
				recup((res)=>{if(res){cbk(res)}else{}})
			}
		})
	}



recup((res)=>{if(res){}})
export const historiques={
	liste,
	recup,
	sauve,
	supprime,
	ajout,
}
