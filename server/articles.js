
const Articles = new Mongo.Collection("articles");

Meteor.methods({
	listeArticles:()=>{
	/*throw new Metheor.Error(500, "Desolé")*/
	return Articles.find().fetch()
	},
	getArticle: (titre)=>{
		return Articles.findOne({titre: titre});
	},
	etArticle: (id)=>{

		return Articles.findOne({titre : "je suis  un titre"});

	},
	testConnex:()=>{
		if (Meteor.userId()){
			return true
		}else{return false}
	},
	ajoutArticle:(nvlArticle)=>{
		if (Meteor.userId()){
			if(nvlArticle.titre.length>0&&nvlArticle.description.length>0){
				Articles.insert({titre:nvlArticle.titre,description:nvlArticle.description,etat:nvlArticle.etat,date:nvlArticle.date})
			}
		}else{return false}
	},
	sauvegardeArticles:(aSauver)=>{
			articles=Articles.findOne({"titre": aSauver.titre})
		Articles.update({_id:articles._id},{$set:aSauver})
	},
	supprimeArticle:(id)=>{Articles.remove({_id:id})}


});
