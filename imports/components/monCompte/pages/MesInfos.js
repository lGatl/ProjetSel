import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Lister from '../Lister.js'



export default class MesInfos extends Component {
	constructor(){
		super()

		this.mesInfos=[
			{Nom:"Bon"},
			{Prenom:"Jean"},
			{Mail:"mail"},
			{Adresse:"adresse"},
			{Telephonne:"03/45/78/78/45"},
			{resp:"oui"},
			{dateVal:"14/45/4568"},
			{note:2}
		]
		this.mesSeugnettes=[
				{solde:10000},
				{totalCredit:800000},
				{totalDebit:955555}
		]
	}


	render(){
		return (


			<div>
				<Titre1 nom="Mes Informations"></Titre1>
				<Lister donnees={this.mesInfos}></Lister>
				<Titre1 nom="Mes Seugnettes"></Titre1>
				<Lister donnees={this.mesSeugnettes}></Lister>
			</div>

		);
	}
}



