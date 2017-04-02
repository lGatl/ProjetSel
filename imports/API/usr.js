
export const usr={
	loggedin : new ReactiveVar(Meteor.userId()),
	logged 	: new ReactiveVar(),
	 usrCo 	: new ReactiveVar({profile:{prenom:"futur séliste"}}),
	 usrs 	:  new ReactiveVar(),
	 co 		: function(usr,pass,cbk){
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
				this.logged.set(true)
				this.getUsrCo((res)=>{})
				FlowRouter.go('/');
			}
		});

	},
	getUsrCo:function(cbk){
		usr.usrCo.set({profile:{prenom:"Futur Seliste"}})
		Meteor.call('utilisateur',Meteor.userId(),(err,res)=>{
			if(err){}else{
				cbk(res)
				if(res){this.usrCo.set(res)}}
			})
	},
	getUsr:function(id,cbk){
		Meteor.call('utilisateur',id,(err,res)=>{
			if(err){}else{
				cbk(res)
				}})
	},
	 deco  : function(){
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
				this.usrCo.set({profile:{prenom:"Futur Seliste"}})
				this.logged.set(false)
			}
		});


	},
	getUsrs: function(cbk){
		Meteor.call('utilisateurs',Meteor.userId(),(err,res)=>{
			if(err){}else{
				cbk(err,res)
				if(res){this.usrs.set(res)}}
			})
	},
	changeCompte(usr){
			Meteor.call("sauvegardeUtilisateur",usr, (err)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de sauvegarder ces modifications" ,
					type:'error'}
			)}else{
				Bert.alert({
					title:"Sauvegarde effectuée",
					message:"Vos modifications sur "+usr.username+" ont été sauvegardées" ,
					type:'success'
				})
			}
		})
	}


}
if(usr.loggedin.get()){usr.logged.set(true)}else{usr.logged.set(false)}
if(usr.logged.get()){usr.getUsrCo((err)=>{})}else{usr.usrCo.set({profile:{prenom:"Futur Seliste"}})}

usr.getUsrs((err)=>{})
