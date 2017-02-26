import React, {Component} from 'react'
import { Button} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import MenuDeroulant from '../../MenuDeroulant.js';
import TableauActions from '../TableauActions.js'

export default class GererAnnonces extends Component {
constructor(){
                super()

                this.categories=["Categories :","Cuisine","Mecanique"]
                this.etat=["Etat","Valider","En Attente","Refuser"]
                this.type=["Type","Offre","Demande"]


                this.annonces={
			titres:["Dates","Nom Prenom","Types","Categorie","Titre de l'annonce"],
			contenu:[
						["02/02/2017","Jean Bon","Demande","Cuisine","Cours de cuisine"],
						["02/02/2017","Jean Bon","Demande","Cuisine","Cours de cuisine"],
						["02/02/2017","Jean Bon","Demande","Cuisine","Cours de cuisine"],
					],
			actions:["Actions","Valider","Editer","Refuser","Supprimer"]
		}
            }

	render(){
		return (

			<div>
				<Titre1 nom="Liste des Annonces"></Titre1>
				 <MenuDeroulant donnees={this.categories}></MenuDeroulant>
				 <MenuDeroulant donnees={this.etat}></MenuDeroulant>
				 <MenuDeroulant donnees={this.type}></MenuDeroulant>
				<TableauActions donnees= {this.annonces}></TableauActions>
				 <Button type='Envoyer'>Appliquer</Button>
			</div>

		);
	}
}
