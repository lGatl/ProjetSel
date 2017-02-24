import React, {Component} from 'react'

import Titre1 from '../Titre1.js'
import MenuDeroulant from '../../MenuDeroulant.js';
import Tableau from '../Tableau.js'

export default class GererAnnonces extends Component {
constructor(){
                super()

                this.categories=["Categories :","Cuisine","Mecanique"]
                this.etat=["Etat","Valider","En Attente","Refuser"]
                this.type=["Type","Offre","Demande"]

            }

	render(){
		return (

			<div>
				<Titre1 nom="Liste des Annonces"></Titre1>
				 <MenuDeroulant donnees={this.categories}></MenuDeroulant>
				 <MenuDeroulant donnees={this.etat}></MenuDeroulant>
				 <MenuDeroulant donnees={this.type}></MenuDeroulant>
				<Tableau></Tableau>
				 <MenuDeroulant></MenuDeroulant>
			</div>

		);
	}
}
