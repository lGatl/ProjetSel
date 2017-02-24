
const Articles = new Mongo.Collection("articles");

const listeArticles = Articles.find().fetch()

Meteor.methods({
	listeArticles:()=>{
		console.log('ListeArticles a été appelé')
	/*throw new Metheor.Error(500, "Desolé")*/
	return Articles.find().fetch()
	},
	etArticle: (id)=>{

		return Articles.findOne({title : "je suis  un titre"});

	},
	ajoutArticle:(nvlArticle)=>{Articles.insert({title:nvlArticle.title,description:nvlArticle.description})},
	supprimArticle:(id)=>{Articles.remove({_id:id})}
});
