	const Historiques = new Mongo.Collection("Historiques")

	Meteor.methods({

		listeHistoriques:()=>{
			return Historiques.find().fetch()
		},
		getHistorique: (titre)=>{
			return Historiques.findOne({titre: titre});
		},
		supprimeHistorique:(id)=>{Historiques.remove({_id:id})},
		ajoutHistorique:(nvlHistorique)=>{
			console.log(nvlHistorique)
			if (Meteor.userId()){
					Historiques.insert(nvlHistorique)
			}else{return false}
		},
		sauvegardeHistorique:(aSauver)=>{
			historiques=Historiques.findOne({"historique": aSauver.historique})
			Historiques.update({_id:historiques._id},{$set:aSauver})
		}
	})

