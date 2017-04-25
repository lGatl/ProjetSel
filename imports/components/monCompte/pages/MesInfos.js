import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Lister from '../Lister.js'
import {createContainer} from 'meteor/react-meteor-data';

import {usr} from '../../../API/usr.js'


 class MesInfo extends Component {
	constructor(){
		super()
		this.state={
			mesInfos:[],
			mesSeugnettes:[]
		}
	}

	render(){

		return (


			<div>
				<Titre1 nom="Mes Informations"></Titre1>
				<Lister donnees={[
					{Nom:this.props.usr.profile.nom},
					{Prenom:this.props.usr.profile.prenom},
					{Mail:this.props.usr.emails[0].address},
					{Adresse:this.props.usr.profile.adresse},
					{Telephone:this.props.usr.profile.tel},
					{resp:this.props.usr.profile.respC},
					{dateVal:this.props.usr.profile.dateValRespC},
					{note:this.props.usr.profile.note}
				]}></Lister>
				<Titre1 nom="Mes Seugnettes"></Titre1>
				<Lister donnees={[
				{Solde:this.props.usr.profile.soldeSeugnette },
				{totalCredit:this.props.usr.profile.totalCredits},
				{totalDebit:this.props.usr.profile.totalDebits}
					]}></Lister>
			</div>

		);
	}
}


 export default MesInfos = createContainer( ()=>{

 	return{usr:usr.usrCo.get(),
 			getUsrCo:usr.getUsrCo}

 } , MesInfo );
