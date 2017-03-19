Meteor.methods({

	utilisateurs:()=>{
		var utilisateurs=Meteor.users.find().fetch()
				return(utilisateurs)
		},
	sauvegardeUtilisateur:(aSauver)=>{
		utilisateur=Meteor.users.findOne({"username": aSauver.username})
		console.log(utilisateur)
		Meteor.users.update({_id:utilisateur._id},{$set:aSauver})
	}
})
