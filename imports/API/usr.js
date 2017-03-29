
export const usr={
	loggedin : new ReactiveVar(Meteor.userId()),
	logged 	: new ReactiveVar(),
	 usrCo 	: new ReactiveVar({profile:{prenom:"futur séliste"}}),
	 co 		: function(usr,pass){
		Meteor.loginWithPassword(usr,pass,(err) => {
			if(err){
				Bert.alert({
					message: err.reason,
					type:'danger'
				});
			} else {
				Bert.alert({
					message: "Vous êtes connecté",
					type: 'success'
				});
				this.logged.set(true)
				this.getUsrCo()
				FlowRouter.go('/');
			}
		});

	},
	getUsrCo:function(){
		usr.usrCo.set({profile:{prenom:"Futur Seliste"}})
		Meteor.call('test',Meteor.userId(),(err,res)=>{
			if(err){}else{
				if(res){this.usrCo.set(res)}}
			})
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
			}
		});

		this.logged.set(false)
	}
}
if(usr.loggedin.get()){usr.logged.set(true)}else{usr.logged.set(false)}
if(usr.logged.get()){usr.getUsrCo()}else{usr.usrCo.set({profile:{prenom:"Futur Seliste"}})}


