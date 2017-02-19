import React, {Component} from 'react'

import { Dropdown, Button, Form, Input, TextArea,Icon,Label} from 'semantic-ui-react'

import Titre1 from './Titre1.js'
import Titre2 from './Titre2.js'

import Tableau from './Tableau.js'

export default class Categories extends Component {
	constructor(){
		super()
		this.stateOptions = [ { key: '0', value: '0', text: 'Editer' },{ key: '1', value: '1', text: 'Desactiver' }  ]
	}

	render(){
		return (

			<div>
				<Titre1></Titre1>
					<Input labelPosition='right' type='text' placeholder='Nom de la Categorie'>
					<Label basic>Nom de la Categorie :  </Label>
					<input />
					<Button>Valider</Button>
				</Input>

				<Titre1></Titre1>
				 <Dropdown placeholder='Action' search selection options={this.stateOptions} />
				<Tableau></Tableau>
			</div>

		);
	}
}
