import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Tableau from '../Tableau.js'
import { Button} from 'semantic-ui-react'


export default class Statistiques extends Component {
	constructor(){
		super()
		this.config={
			titres:["colonne1","colonne2"],
			contenu:[
						["120","nb de seugnettes"],
						["utilisateur suppr","nom affiché pour les utilisateurs supprimés"],
						["1200","plancher maximum"]
					]
		}
	}
	render(){
		return (


			<div>
				<Titre1 nom="Configuration"></Titre1>
				<Tableau donnees={this.config}></Tableau>
				<Button>Valider</Button>
			</div>

		);
	}
}
