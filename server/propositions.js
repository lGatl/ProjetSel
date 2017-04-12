
const Propositions = new Mongo.Collection("propositions");

Meteor.methods({
	listePropositions:()=>{
	/*throw new Metheor.Error(500, "Desolé")*/
	return Propositions.find().fetch()
	},
	getProposition: (titre)=>{
		return Propositions.findOne({titre: titre});
	},
	etProposition: (id)=>{

		return Propositions.findOne({titre : "je suis  un titre"});

	},
	ajoutProposition:(nvlProposition)=>{
		if (Meteor.userId()){

				Propositions.insert({
					annonceId:nvlProposition.annonceId,
					prix:nvlProposition.prix,
					commentaire:nvlProposition.commentaire,
					utilisateur:nvlProposition.utilisateur,
					etat:"En attente",
					date:Date.now()
				})

		}else{return false}
	},
	sauvegardePropositions:(aSauver)=>{
		console.log("aSauver", aSauver);
			prop=Propositions.findOne({"titre": aSauver.titre})
		Propositions.update({_id:prop._id},{$set:aSauver})
	},
	supprimeProposition:(id)=>{Propositions.remove({_id:id})}


});
