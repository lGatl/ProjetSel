	const Categories = new Mongo.Collection("categories")

	Meteor.methods({

		listeCategories:()=>{
			return Categories.find().fetch()
		},
		getCategorie: (titre)=>{
			return Categories.findOne({titre: titre});
		},
		supprimeCategorie:(id)=>{Categories.remove({_id:id})},
		ajoutCategorie:(nvlCategorie)=>{
			console.log(nvlCategorie)
			if (Meteor.userId()){
					Categories.insert(nvlCategorie)
			}else{return false}
		},
		sauvegardeCategorie:(aSauver)=>{
			categories=Categories.findOne({"categorie": aSauver.categorie})
			Categories.update({_id:categories._id},{$set:aSauver})
		}
	})

