	const Annonces = new Mongo.Collection("annonces")

	Meteor.methods({
		listeAnnonce:()=>{
			console.log('ListeAnnonces été appelé')
			return Articles.find().fetch()
		},
		ajoutAnnonce:(nvlAnnonce)=>{
			console.log(nvlAnnonce)
			if (Meteor.userId()){
					Annonces.insert({
						type: nvlAnnonce.type,
						titreDeLAnnonce: nvlAnnonce.titreDeLAnnonce,
						descriptionDeLAnnonce: nvlAnnonce.descriptionDeLAnnonce,
						informationDeContact: nvlAnnonce.informationDeContact,
						dateDeFin: nvlAnnonce.dateDeFin
					})
			}else{return false}
		}
	})
