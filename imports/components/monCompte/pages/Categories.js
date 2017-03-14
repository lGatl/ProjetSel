import React, {Component} from 'react'

import { Button, Form, Input, TextArea,Icon,Label} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'
import TableauActions from '../TableauActions.js'



export default class Categories extends Component {

	constructor(){
		super()
			this.categ={
			titres:["Categories","Offres","Demandes"],
			contenu:[
						["Cuisine","5","1"],
						["Bricolage","5","1"],
						["Chippendales","5","1"]
					],
			actions:{titre:"Actions",contenu:["Editer","Desactiver"]}
		}
	}

	render(){
		return (

			<div>
				<Titre1 nom="Creer une Categorie"></Titre1>
					<Input labelPosition='right'
							name="titreDeLaCategorie"
							type='text'
							placeholder='Nom de la Categorie'

							>
					<Label basic>Nom de la Categorie :  </Label>
					<input />
					<Button>Valider</Button>
				</Input>

				<Titre1 nom="Liste des categories"></Titre1>

				<TableauActions donnees={this.categ} ></TableauActions>
				<Button type='Envoyer' >Appliquer</Button>
			</div>

		);
	}
}
