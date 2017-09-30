
const TYPE 			= "_ARTICLE"
const RECUP 		= "RECUP"		+ TYPE;
const SAUVE 		= "SAUVE"		+ TYPE;
const SUPPRIME 	= "SUPPRIME"	+ TYPE;
const AJOUT 		= "AJOUT"		+ TYPE;
const RECUP1 		= "RECUP1"		+ TYPE;

export const ARTICLE = {
	TYPE,
	RECUP,
	SAUVE,
	SUPPRIME,
	AJOUT,
	RECUP1,
}

export function recup (cbk = ()=>{}){
	
	let p = new Promise( ( resolve, reject ) =>{
		Meteor.call('listeArticles',Meteor.userId(),
			(err,res)=>{
			if(err){
				reject( err );
			}else{
				cbk(res)
				resolve( res );
			}
		})
	})
	return {
		type: 		RECUP,
		payload: 	p
	};
}

export function sauve(aSauv, cbk = ()=>{}){
	let p = new Promise( ( resolve, reject ) => {
		Meteor.call('sauvegardeArticles',aSauv,(err,res)=>{
			if(err){
				reject(err)
			}else{
				cbk(res)
				resolve(res)
			}
		})
	})
	return {
		type: 		SAUVE,
		payload: 	p
	};
}

export function supprime(aSuppr,cbk =()=>{}){
	let p = new Promise( ( resolve, reject ) => {
		Meteor.call('supprimeArticle', aSuppr ,(err,res)=>{
			if(err){
				reject(err)
			}else{
				cbk(res)
				resolve(res)

			}
		})
	})
	return {
		type: 		SUPPRIME,
		payload: 	p
	};

}
export function ajout(ann,cbk=()=>{}){
	let p = new Promise( ( resolve, reject ) => {
		Meteor.call('ajoutArticle', ann ,(err,res)=>{
			if(err){
				reject(err)
			}else{
				cbk(res)
				resolve(res)

			}
		})
	})
	return {
		type: 		AJOUT,
		payload: 	p
	};
}
export function recup1=(obj, cbk = () => {}){
	let p = new Promise( ( resolve, reject ) => {
		Meteor.call('getArticle',titre,(err,res)=>{
		if(err){
				reject(err)
			}else{
				cbk(res)
				resolve(res)
			}
		})
	})
	return {
		type: 		RECUP,
		payload: 	p
	};
}
