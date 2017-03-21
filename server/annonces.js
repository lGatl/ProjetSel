	const Annonces = new Mongo.Collection("annonces")

	Meteor.methods({
		listeAnnonce:()=>{
			console.log('ListeAnnonces été appelé')
			return Articles.find().fetch()
		},
		listeAnnonces:()=>{
			console.log('ListeAnnonces a été appelé')

			return Annonces.find().fetch()
		},
		getAnnonce: (titre)=>{
			return Annonces.findOne({titreDeLAnnonce: titre});
		},
		supprimeAnnonce:(id)=>{Annonces.remove({_id:id})},
		ajoutAnnonce:(nvlAnnonce)=>{
			if (Meteor.userId()){
					Annonces.insert({
						categorie:nvlAnnonce.categorie,
						type: nvlAnnonce.type,
						titreDeLAnnonce: nvlAnnonce.titreDeLAnnonce,
						descriptionDeLAnnonce: nvlAnnonce.descriptionDeLAnnonce,
						informationDeContact: nvlAnnonce.informationDeContact,
						dateDeFin: nvlAnnonce.dateDeFin,
						etat: nvlAnnonce.etat
					})
			}else{return false}
		},
		sauvegardeAnnonces:(aSauver)=>{
			annonces=Annonces.findOne({"titreDeLAnnonce": aSauver.titreDeLAnnonce})
		Annonces.update({_id:annonces._id},{$set:aSauver})
	}
	})

