	const Annonces = new Mongo.Collection("annonces")

	Meteor.methods({
		listeAnnonce:()=>{
			return Articles.find().fetch()
		},
		listeAnnonces:()=>{

			return Annonces.find().fetch()
		},
		getAnnonce: (titre)=>{
			return Annonces.findOne({titre: titre});
		},
		getAnnonceId: (id)=>{
			return Annonces.findOne({_id: id});
		},
		supprimeAnnonce:(id)=>{Annonces.remove({_id:id})},
		ajoutAnnonce:(nvlAnnonce)=>{
			if (Meteor.userId()){
				Annonces.insert({
					categorie:nvlAnnonce.categorie,
					type: nvlAnnonce.type,
					titre: nvlAnnonce.titre,
					description: nvlAnnonce.description,
					informationDeContact: nvlAnnonce.informationDeContact,
					etat: nvlAnnonce.etat,
					avancement: nvlAnnonce.avancement,
					utilisateur:nvlAnnonce.utilisateur,
					date:Date.now(),
					dateDeFin: Date.parse(nvlAnnonce.dateDeFin)
				})
			}else{return false}
		},
		sauvegardeAnnonces:(aSauv)=>{
			console.log(aSauv)
				if(aSauv._id){
					annonces=aSauv
				}else{annonces=Annonces.findOne({"titre": aSauv.titre})}
		Annonces.update({_id:annonces._id},{$set:aSauv})
	}
	})

