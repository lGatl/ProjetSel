
export const loggedin =  new ReactiveVar(Meteor.userId())
export const usrCo = new ReactiveVar({})

export const getUsrCo=()=>{
Meteor.call('test',Meteor.userId(),(err,res)=>{
	if(err){}else{
		if(res){usrCo.set(res)}}
})
}

export const log =(usr,pass)=>{
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

				getUsrCo()
			}
		});
}
