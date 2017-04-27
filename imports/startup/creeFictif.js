
import{usr}from'../API/usr.js'
import{annonces}from'../API/annonces.js'
	const categories=()=>{
		Meteor.call('listeCategories',(err,res)=>{
			if(err){console.log("errcat"," ",err)}else{
				if(res.length==0){
					var obj=[
						{categorie : "cuisine", etat : "Publier" },
						{categorie : "mecanique", etat : "Desactiver" },
						{categorie : "chipendales", etat : "Publier" },
						{categorie : "menage", etat : "Publier" }
					]
					obj.map((ob)=>{
					Meteor.call('ajoutCategorie',ob,(erre,resp)=>console.log("categorie fictive crees"))
					})
				}
			}
		})
	}

	const articles=()=>{
		Meteor.call('listeArticles', (err,res)=>{
			if(err){console.log("errart"," ",err)}else{
				if(res.length==0){
					var obj=[
						{titre : "Webogreen en folie", description : "C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Publier",date:Date.now() },
						{titre : "un second article", description : "C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Publier" ,date:Date.now()},
						{titre : "un autre article", description : "C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Desactiver",date:Date.now() },
						{titre : "pas un autre article", description :"C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Publier",date:Date.now() },

					]
					obj.map((ob)=>{
					Meteor.call('ajoutArticle',ob,(erre,resp)=>console.log("article fictif cree"))
					})
				}
			}
		})
	}

	const annoncs=(usr)=>{


		Meteor.call('listeAnnonces', (err,res)=>{

			if(err){console.log("errann"," ",err)}else{
				var utilisateur

				if(res.length==0){
					var obj=[

					{categorie : "cuisine", type : "offre", titre : "500 couverts", description : "Besoin d'un cuisinier capable de gerer 500 couverts!", informationDeContact : "monmail@gmal.com", dateDeFin : "1/12/2017", etat : "Valider",avancement:"green",utilisateur:{username:usr.username,_id:usr._id,note:usr.profile.note,nom:usr.profile.nom,prenom:usr.profile.prenom}},
						{categorie : "mecanique", type : "demande", titre : "Vidange", description : "Qui veut venir me faire une petite vidange ?? ", informationDeContact : "tonmail@talmal.fr", dateDeFin : "25/04/2016", etat : "En Attente",avancement:"green",utilisateur:{username:usr.username,_id:usr._id,note:usr.profile.note,nom:usr.profile.nom,prenom:usr.profile.prenom} },
						{categorie : "informatique", type : "offre", titre : "Ecran Bleu", description : ":'( Je ne comprend pas qqn peut venir m'aider?", informationDeContact : "sonmail@caramal.rf", dateDeFin : "01/02/2018", etat : "Valider",avancement:"green",utilisateur:{username:usr.username,_id:usr._id,note:usr.profile.note,nom:usr.profile.nom,prenom:usr.profile.prenom} },
						{categorie : "cheval", type : "demande", titre : "Pour steak", description : "Nourrit a l'herbe toute sa vie, massé chaque jour", informationDeContact : "notremail@wanadoo.fr", dateDeFin : "15/12/2013", etat : "Refuser",avancement:"green",utilisateur:{username:usr.username,_id:usr._id,note:usr.profile.note,nom:usr.profile.nom,prenom:usr.profile.prenom} }

					]
					obj.map((ob)=>{
					Meteor.call('ajoutAnnonce',ob,(erre,resp)=>console.log("annonce fictif cree"))
					})
				}
			}
		})
	}
	const utilisateur=()=>{

		usr.getUsrs( (err,res)=>{
			if(err){console.log("errut"," ",err)}else{

				if(res.length==0){
					var obj=[
						{
							username:"dudule@gmal.com",
							email:"dudule@gmal.com",
							password:"12345",
							profile:{
								prenom:"David",
								nom:"Hule",
								tel:"01.23.45.67.89",
								adresse:"5 je ne sais plus 55000TRESBIEN",
								respC:true,
								dateValRespC:"12/78/2154",
								note:5,
								soldeSeugnette:8542,
								totalCredits:5487,
								totalDebits:4561,
								role:"se"
							}
						},
						{
							username:"dddudule@gmal.com",
							email:"dddudule@gmal.com",
							password:"12345",
							profile:{
								prenom:"David",
								nom:"Hule",
								tel:"01.23.45.67.89",
								adresse:"5 je ne sais plus 55000TRESBIEN",
								respC:true,
								dateValRespC:"12/78/2154",
								note:5,
								soldeSeugnette:8542,
								totalCredits:5487,
								totalDebits:4561,
								role:"se"
							}
						},
						{
							username:"sangoku@DBZ.com",
							email:"sangoku@DBZ.com",
							password:"12345",
							profile:{
								prenom:"Cacarotte",
								nom:"Sayen",
								tel:"01.23.45.67.89",
								adresse:"5 je ne sais plus 55000TRESBIEN",
								respC:true,
								dateValRespC:"12/78/2154",
								note:5,
								soldeSeugnette:8542,
								totalCredits:5487,
								totalDebits:4561,
								role:"mo"
							}
						},
						{
							username:"alf@extratrestre.fr",
							email:"alf@extratrestre.fr",
							password:"12345",
							profile:{
								prenom:"Alf",
								nom:"CéUnMistère",
								tel:"01.23.45.67.89",
								adresse:"5 je ne sais plus 55000TRESBIEN",
								respC:true,
								dateValRespC:"12/78/2154",
								note:5,
								soldeSeugnette:8542,
								totalCredits:5487,
								totalDebits:4561,
								role:"ad"
							}
						},

					]
					obj.map((ob)=>{
					Accounts.createUser(ob,(erre,resp)=>console.log("utilisateur ",ob.username," pass:12345 fictif créé"))
					})
					connexion()

					annoncess()

				}
			}
		})

	}

const connexion=()=>{

		usr.co("alf@extratrestre.fr", "12345",(err)=>{if(err){}else{annoncess()}})

	}



const annoncess=(id)=>{
	usr.getUsrCo((res)=>{	if(res){annoncs(res)}else{console.log("doit etre connecté pour generer auto des annonces")}})

		}



utilisateur()
categories()
articles()
annoncess()
