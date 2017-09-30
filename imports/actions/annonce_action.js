
const TYPE 			= "_ANNONCE"
const GET 			= "GET"			+ TYPE;
const SAUVE 		= "SAUVE"		+ TYPE;
const SUPPRIME 	= "SUPPRIME"	+ TYPE;
const AJOUT 		= "AJOUT"		+ TYPE;
const GET1 			= "GET1"		+ TYPE;

export const ANNONCE = {
	GET,
	GET1,
	SAUVE,
	SUPPRIME,
	AJOUT,
}

export function get (cbk = ()=>{}){
	
	let p = new Promise( ( resolve, reject ) =>{
		Meteor.call('listeAnnonces',Meteor.userId(),
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
		type: 		GET,
		payload: 	p
	};
}
export function get1=(obj, cbk = () => {}){
	let p = new Promise( ( resolve, reject ) => {
		Meteor.call('getAnnonce',titre,(err,res)=>{
		if(err){
				reject(err)
			}else{
				cbk(res)
				resolve(res)
			}
		})
	})
	return {
		type: 		GET,
		payload: 	p
	};
}

export function sauve(aSauv, cbk = ()=>{}){
	let p = new Promise( ( resolve, reject ) => {
		Meteor.call('sauvegardeAnnonces',aSauv,(err,res)=>{
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
		Meteor.call('supprimeAnnonce', aSuppr ,(err,res)=>{
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
		Meteor.call('ajoutAnnonce', ann ,(err,res)=>{
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

