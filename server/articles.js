
const Articles = new Mongo.Collection("articles");

const listeArticles = Articles.find().fetch()

Meteor.methods({
	listeArticles:()=>{
		console.log('ListeArticles a été appelé')
	/*throw new Metheor.Error(500, "Desolé")*/
	return Articles.find().fetch()
	},
	getArticle: (titre)=>{
		return Articles.findOne({title: titre});
	},
	etArticle: (id)=>{

		return Articles.findOne({title : "je suis  un titre"});

	},
	testConnex:()=>{
		if (Meteor.userId()){
			return true
		}else{return false}
	},
	ajoutArticle:(nvlArticle)=>{
		if (Meteor.userId()){
			if(nvlArticle.title.length>1&&nvlArticle.description.length>1){
				Articles.insert({title:nvlArticle.title,description:nvlArticle.description})
			}
		}else{return false}
	},
	supprimArticle:(id)=>{Articles.remove({_id:id})}


});
