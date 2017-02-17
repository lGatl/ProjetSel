
import React, {Component} from 'react'
import {  Dropdown } from 'semantic-ui-react'


export default class MenuDeroulant extends Component {
/*import { stateOptions } from '../common'*/
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

constructor(){
	super()
		this.stateOptions = [
		{ key: '0', value: 'valider', text: 'Valider' },
		{key: '1', value: 'refuser', text: 'Refuser'},
		{ key: '2', value: 'editer', text: 'Editer' },
		{key: '3', value: 'suspendre', text: 'Suspendre'},
		{ key: '4', value: 'roleAdmin', text: 'Role Admin' },
		{key: '5', value: 'roleModerateur', text: 'Role Moderateur'},
		{ key: '6', value: 'ajouterSeugnettes', text: 'Ajouter Seugnettes' },
		{key: '7', value: 'supprimer', text: 'Supprimer'},

		]
	}

	render(){

		return (
			<Dropdown placeholder='Actions' search selection options={this.stateOptions} />
		);
	}
}
