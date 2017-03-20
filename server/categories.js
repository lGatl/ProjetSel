	const Categories = new Mongo.Collection("categories")

	Meteor.methods({

		listeCategories:()=>{
			console.log('ListeCategories a été appelé')

			return Categories.find().fetch()
		},
		getCategorie: (titre)=>{
			return Categories.findOne({titreDeLaCategorie: titre});
		},

		ajoutCategorie:(nvlCategorie)=>{
			console.log(nvlCategorie)
			if (Meteor.userId()){
					Categories.insert(nvlCategorie)
			}else{return false}
		}
	})

