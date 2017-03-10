
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
	supprimArticle:(id)=>{Articles.remove({_id:id})},
	utilisateurs:()=>{
		var id=Meteor.userId()
		var utilisateurs=Meteor.users.find().fetch()
		var ut={}
		console.log(id,utilisateurs)
		utilisateurs.map((utilisateur)=>{
			if(utilisateur._id==id){ut=utilisateur}
		})
		console.log(ut)
				return(ut)
		},
	mail:()=>{
		Email.send({
		to: "to.gat55@live.fr",
		from: "from.gat55@live.fr",
		subject: "Example Email",
		text: "The contents of our email in plain text.",
	});
	}



});
