import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Tableau from '../Tableau.js'
import Solde from '../Solde.js'

export default class MonReleve extends Component {
	constructor(){
		super()
		this.donneur={
			titres:["Date","Donneur","Catégorie","Titre de l'annonce","Nombre de seugnettes"],
			contenu:[
						["02/02/2017","Jean Bon","Cuisine","Cours de Cuisine","500"],
						["02/02/2017","Jean Bon","Cuisine","Cours de Cuisine","500"]
					]
		}
		this.receveur={
			titres:["Date","Receveur","Catégorie","Titre de l'annonce","Nombre de seugnettes"],
			contenu:[
						["02/02/2017","Jean Bddon","Cucdce","Caaaaasine","5004"],
						["02/02/2017","Jean Bcdcdon","sfdsfsde","Cdcdsfcdscdscsdisine","545"]
					],
			actions:["Actions","Editer","Desactiver","Supprimer"]
		}
	}
	render(){
		return (


			<div>
				<Solde></Solde> <br/> <br/><br/>
				<Titre1 nom="Liste des débits"></Titre1>
				<Tableau donnees={this.donneur}></Tableau>
				<Titre1 nom="Liste des crédits"></Titre1>
				<Tableau donnees={this.receveur}></Tableau>

			</div>

		);
	}
}
