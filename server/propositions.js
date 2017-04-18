
const Propositions = new Mongo.Collection("propositions");

Meteor.methods({
	listePropositions:()=>{
	/*throw new Metheor.Error(500, "Desolé")*/
	return Propositions.find().fetch()
	},
	getProposition: (titre)=>{
		return Propositions.findOne({titre: titre});
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
		Propositions.update({_id:aSauver._id},{$set:aSauver})
	},
	supprimeProposition:(id)=>{Propositions.remove({_id:id})}


});
