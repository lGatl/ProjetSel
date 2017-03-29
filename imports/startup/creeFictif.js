
import{usr}from'../API/usr.js'
import{annonces}from'../API/annonces.js'
	const categories=()=>{
		Meteor.call('listeCategories',(err,res)=>{
			if(err){console.log("errcat"," ",err)}else{
				if(res.length==0){
					var obj=[
						{categorie : "cuisine", etat : "Editer" },
						{categorie : "mecanique", etat : "Desactiver" },
						{categorie : "chipendales", etat : "Editer" },
						{categorie : "menage", etat : "Editer" }
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
						{title : "Webogreen en folie", description : "C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Editer" },
						{title : "un second article", description : "C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Editer" },
						{title : "un autre article", description : "C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Desactiver" },
						{title : "pas un autre article", description :"C'est la formidable histoire d'une classe de formation web composée de super codeurs fou, qui travaillerent main dans la main pour creer un site internet genial pour la croix rouge de Verdun.", etat : "Editer" },

					]
					obj.map((ob)=>{
					Meteor.call('ajoutArticle',ob,(erre,resp)=>console.log("article fictif cree"))
					})
				}
			}
		})
	}

	const annoncs=(id)=>{


		Meteor.call('listeAnnonces', (err,res)=>{
			if(err){console.log("errann"," ",err)}else{
				var utilisateur

				if(res.length==0){
					var obj=[

					{categorie : "cuisine", type : "offre", titreDeLAnnonce : "500 couverts", descriptionDeLAnnonce : "Besoin d'un cuisinier capable de gerer 500 couverts!", informationDeContact : "monmail@gmal.com", dateDeFin : "1/15/5477", etat : "Valider",utilisateur:id},
						{categorie : "mecanique", type : "demande", titreDeLAnnonce : "Vidange", descriptionDeLAnnonce : "Qui veut venir me faire une petite vidange ?? ", informationDeContact : "tonmail@talmal.fr", dateDeFin : "25/45/9845", etat : "En Attente",utilisateur:id },
						{categorie : "informatique", type : "offre", titreDeLAnnonce : "Ecran Bleu", descriptionDeLAnnonce : ":'( Je ne comprend pas qqn peut venir m'aider?", informationDeContact : "sonmail@caramal.rf", dateDeFin : "01/23/4567", etat : "Valider",utilisateur:id },
						{categorie : "cheval", type : "demande", titreDeLAnnonce : "Pour steak", descriptionDeLAnnonce : "Nourrit a l'herbe toute sa vie, massé chaque jour", informationDeContact : "notremail@wanadoo.fr", dateDeFin : "98/76/5432", etat : "Refuser",utilisateur:id }

					]
					obj.map((ob)=>{
					annonces.ajout(ob)
					})
				}
			}
		})
	}
	const utilisateur=()=>{
		Meteor.call('utilisateurs', (err,res)=>{
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

		usr.co("alf.@extratrestre.fr", "12345")

	}



const annoncess=(id)=>{
	Meteor.call('utilisateur',(err,res)=>{
		if(err){
			console.log(err)
		}else{
				if(res){annoncs(res._id)}else{console.log("doit etre connecté pour generer auto des annonces")}
		}
	})
}



utilisateur()
categories()
articles()
annoncess()
