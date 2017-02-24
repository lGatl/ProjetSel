import React, {Component} from 'react'

import { Dropdown, Button, Form, Input, TextArea,Icon,Label} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'
import MenuDeroulant from '../../MenuDeroulant.js';

import Tableau from '../Tableau.js'

export default class Categories extends Component {
	constructor(){
		super()
		this.actions=["Actions","Editer","Desactiver"]
		this.stateOptions = [ { key: '0', value: '0', text: 'Editer' },{ key: '1', value: '1', text: 'Desactiver' }  ]
	}

	render(){
		return (

			<div>
				<Titre1 nom="Creer une Categorie"></Titre1>
					<Input labelPosition='right' type='text' placeholder='Nom de la Categorie'>
					<Label basic>Nom de la Categorie :  </Label>
					<input />
					<Button>Valider</Button>
				</Input>

				<Titre1 nom="Liste des categories"></Titre1>
				<MenuDeroulant donnees={this.actions}></MenuDeroulant>
				<Tableau></Tableau>
			</div>

		);
	}
}
