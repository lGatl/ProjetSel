import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Tableau from '../Tableau.js'
import Solde from '../Solde.js'
import {createContainer} from 'meteor/react-meteor-data';
import {historiques} from '../../../API/historiques.js'
import {usr} from '../../../API/usr.js'


class MonRelev extends Component {

	debits(){
		var debits=[]
		if(this.props.usr.usrCo&&this.props.historiques.liste){

			this.props.historiques.liste.map((hist,i)=>{
				if(this.props.usr.usrCo._id==hist.debiteur._id){
					var date = new Date(hist.date)
					debits.push([
						date.getUTCDate()+"/"+(date.getUTCMonth() + 1) +"/"+date.getUTCFullYear(),
						hist.crediteur.username,
						hist.annonce.categorie,
						hist.annonce.titre,
						hist.prix
					])
				}
			})

			return(
				<Tableau donnees={{
					titres:["Date","Donneur","Catégorie","Titre de l'annonce","Nombre de seugnettes"],
					contenu:debits
				}}></Tableau>
			)
		}
	}
	credits(){
		var debits=[]
		if(this.props.usr.usrCo&&this.props.historiques.liste){

			this.props.historiques.liste.map((hist,i)=>{
				if(this.props.usr.usrCo._id==hist.crediteur._id){
					var date = new Date(hist.date)
					debits.push([
						date.getUTCDate()+"/"+(date.getUTCMonth() + 1) +"/"+date.getUTCFullYear(),
						hist.debiteur.username,
						hist.annonce.categorie,
						hist.annonce.titre,
						hist.prix
					])
				}
			})

			return(
				<Tableau donnees={{
					titres:["Date","Donneur","Catégorie","Titre de l'annonce","Nombre de seugnettes"],
					contenu:debits
				}}></Tableau>
			)
		}
	}

	render(){

		return (
			<div>

				<Solde solde={this.props.usr.usrCo.profile.soldeSeugnette}></Solde> <br/> <br/><br/>
				<Titre1 nom="Liste des débits"></Titre1>
					{this.debits()}

				<Titre1 nom="Liste des crédits"></Titre1>
				{this.credits()}
			</div>

		);
	}
}
export default MonReleve = createContainer( ()=>{
 	return{
		historiques:{
			liste:historiques.liste.get()
		},
		usr:{
			usrCo:usr.usrCo.get(),
 			getUsrCo:usr.getUsrCo
 		},

	}
 } ,  MonRelev );
