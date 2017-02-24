import React, {Component} from 'react'

import { Dropdown, Button, Form, Input, TextArea,Icon} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'
import MenuDeroulant from '../../MenuDeroulant.js';

import Tableau from '../Tableau.js'

export default class GererActu extends Component {
	constructor(){
		super()

		this.actions=["Actions","Editer","Desactiver"]
		this.stateOptions = [ { key: '0', value: '0', text: 'Alabama' },{ key: '1', value: '1', text: 'Alabama' }  ]
	}

	render(){
		return (


			<div>
				<Titre1 nom="Liste des Articles"></Titre1>
				 <MenuDeroulant donnees={this.actions}></MenuDeroulant>
				<Tableau></Tableau>
				<Titre2 nom="Ajouter un Nouvel Article"></Titre2>
				<Form onSubmit={this.handleSubmit}>


					<Form.Input label="Titre de l'annonce" name='titreDeLAnnonce' placeholder='Choisissez un titre' />

					<Form.TextArea name='DescriptionDeLArticle' label="description de l'article" placeholder="Decrire l'article" rows='3' />
					<h4>Inserer une piece jointe</h4>
					<br/>
					<Icon size ='huge' name='camera'/>
    					<Icon size ='huge'  name='paste'  />
					<br/>
					<br/>
					<Button primary type='submit'>Valider</Button>

				</Form>
			</div>

		);
	}
}
