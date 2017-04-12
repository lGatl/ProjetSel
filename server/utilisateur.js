Meteor.methods({

	utilisateurs:()=>{
		var utilisateurs=Meteor.users.find().fetch()
				return(utilisateurs)
		},
	supprimeUtilisateur:(aSuppr)=>{
		utilisateur=Meteor.users.findOne({"username": aSuppr.username})
		Meteor.users.remove({_id:utilisateur._id})
	},
	sauvegardeUtilisateur:(aSauver)=>{
		utilisateur=Meteor.users.findOne({"username": aSauver.username})
		Meteor.users.update({_id:utilisateur._id},{$set:aSauver})
	},
	utilisateur:(a)=>{
		user=Meteor.users.findOne({_id: a})
		return user
	},
	utilisateurNom:(a)=>{
		user=Meteor.users.findOne({username: a})
		return user
	}

})


