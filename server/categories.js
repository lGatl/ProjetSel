	const Categories = new Mongo.Collection("Categories")

	Meteor.methods({
		listeCategorie:()=>{
			console.log('ListeCategories été appelé')
			return Articles.find().fetch()
		},
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
					Categories.insert({
						categorie:nvlCategorie.nom,
						type: nvlCategorie.action,
					})
			}else{return false}
		}
	})

