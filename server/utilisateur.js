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
	utilisateur:()=>{
		var connecteID=Meteor.userId()
		connecte=Meteor.users.findOne({_id: connecteID})
		return connecte
	},
	test:(a)=>{
		connecte=Meteor.users.findOne({_id: a})
		return connecte
	}

})


