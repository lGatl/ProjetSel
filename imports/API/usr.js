

	const loggedin =new ReactiveVar(Meteor.userId())
	const logged 	=new ReactiveVar()
	 const usrCo 	= new ReactiveVar({profile:{prenom:"futur séliste"}})
	 const usrs 	=  new ReactiveVar()
	const  co 	= (usr,pass,cbk)=>{
		Meteor.loginWithPassword(usr,pass,(err) => {
			if(err){
				cbk(err)
				Bert.alert({
					message: err.reason,
					type:'danger'
				});
			} else {
				cbk()
				Bert.alert({
					message: "Vous êtes connecté",
					type: 'success'
				});
				logged.set(true)
				getUsrCo((res)=>{})
				FlowRouter.go('/');
			}
		});

	}
	const getUsrCo=(cbk)=>{
		usrCo.set({profile:{prenom:"futur séliste"}})
		Meteor.call('utilisateur',Meteor.userId(),(err,res)=>{
			if(err){}else{
				cbk(res)
				if(res){usrCo.set(res)}}
			})
	}
	const recupNom=(utilisateur,cbk)=>{
		Meteor.call('utilisateurNom',utilisateur,(err,res)=>{
			if(err){}else{
				cbk(err,res)
			}
		})
	}
	const getUsr=(id,cbk)=>{
		Meteor.call('utilisateur',id,(err,res)=>{
			if(err){}else{
				cbk(res)
				}})
	}
	const  deco  =()=>{
		Meteor.logout((err)=>{
			if(err){
				Bert.alert({
					title:"Erreur réseau ",
					message: "Nous n'avons pas pu vous déconnecter",
					type: 'danger'
				});
			} else {
				Bert.alert({
					title:"Déconnexion",
					message: "Vous êtes maintenant déconnecté",
					type: 'success'
				});
				usrCo.set({profile:{prenom:"Futur Seliste"}})
				logged.set(false)
			}
		});


	}
	const getUsrs=function(cbk){
		Meteor.call('utilisateurs',Meteor.userId(),(err,res)=>{
			if(err){}else{
				cbk(err,res)
				if(res){usrs.set(res)}}
			})
	}
	const changeCompte=(utilisateur)=>{
			Meteor.call("sauvegardeUtilisateur",utilisateur, (err)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de sauvegarder ces modifications" ,
					type:'error'}
			)}else{
				Bert.alert({
					title:"Sauvegarde effectuée",
					message:"Vos modifications sur "+utilisateur.username+" ont été sauvegardées" ,
					type:'success'
				})
				getUsrs((err,res)=>{if(res){}})
				getUsrCo((res)=>{})
			}
		})
	}
	const supprimer=(utilisateur)=>{

		Meteor.call("supprimeUtilisateur",utilisateur, (err)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer ce compte utilisateur "+utilisateur.username,
					type:'error'}
			)}else{
				Bert.alert({
					title:"Suppression Effectuée",
					message:"Ce compte utilisateur "+utilisateur.username+" a été supprimé" ,
					type:'success'
				})
				getUsrs((err,res)=>{if(res){}})
			}
		})

	}

	const creer=(utilisateur)=>{

		Accounts.createUser(utilisateur, (err)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'enregistrer ce compte" ,
					type:'error'}
			)}else{
				Bert.alert({
					title:"Compte enregistré",
					message:"Votre compte "+utilisateur.username+" a été enregistré" ,
					type:'success'
				})
				getUsrs((err,res)=>{if(res){}})
			}
		})

	}


if(loggedin.get()){logged.set(true)}else{logged.set(false)}
if(logged.get()){getUsrCo((err)=>{})}else{usrCo.set({profile:{prenom:"futur séliste"}})}

getUsrs((err)=>{})

export const usr={
	loggedin,
	logged,
	usrCo,
	usrs,
	co,
	recupNom,
	getUsrCo,
	getUsr,
	deco,
	getUsrs,
	changeCompte,
	supprimer,
	creer
	}
