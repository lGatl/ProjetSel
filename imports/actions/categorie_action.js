
const TYPE 			= "_CATEGORIE"
const RECUP 		= "RECUP"		+ TYPE;
const SAUVE 		= "SAUVE"		+ TYPE;
const SUPPRIME 	= "SUPPRIME"	+ TYPE;
const AJOUT 		= "AJOUT"		+ TYPE;
const RECUP1 		= "RECUP1"		+ TYPE;

export const CATEGORIE = {
	TYPE,
	RECUP,
	SAUVE,
	SUPPRIME,
	AJOUT,
	RECUP1,
}

export function recup (cbk = ()=>{}){
	
	let p = new Promise( ( resolve, reject ) =>{
		Meteor.call('listeCategories',Meteor.userId(),
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
		Meteor.call('sauvegardeCategories',aSauv,(err,res)=>{
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
		Meteor.call('supprimeCategorie', aSuppr ,(err,res)=>{
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
		Meteor.call('ajoutCategorie', ann ,(err,res)=>{
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
		Meteor.call('getCategorie',titre,(err,res)=>{
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
