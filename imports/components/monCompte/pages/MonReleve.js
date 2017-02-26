import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Tableau from '../Tableau.js'
import Solde from '../Solde.js'

export default class MonReleve extends Component {
	constructor(){
		super()
		this.donneur={
			titres:["Date","Nom Prenom du Donneur","Categorie","Titre de l'annonceur","Nombre de seugnettes"],
			contenu:[
						["02/02/2017","Jean Bon","Cuisine","Cours de Cuisine","500"],
						["02/02/2017","Jean Bon","Cuisine","Cours de Cuisine","500"]
					]
		}
		this.receveur={
			titres:["Date","Nom Prenom du Receveur","Categorie","Titre de l'annonceur","Nombre de seugnettes"],
			contenu:[
						["02/02/2017","Jean Bon","Cuisine","Cours de Cuisine","500"],
						["02/02/2017","Jean Bon","Cuisine","Cours de Cuisine","500"]
					],
			actions:["Actions","Editer","Desactiver","Supprimer"]
		}
	}
	render(){
		return (


			<div>
				<Solde></Solde> <br/> <br/><br/>
				<Titre1 nom="Liste des debits"></Titre1>
				<Tableau donnees={this.donneur}></Tableau>
				<Titre1 nom="Liste des credits"></Titre1>
				<Tableau donnees={this.receveur}></Tableau>

			</div>

		);
	}
}
