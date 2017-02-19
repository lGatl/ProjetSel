import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Button, Form, Input, TextArea,Icon} from 'semantic-ui-react'

import Titre1 from './Titre1.js'
import Titre2 from './Titre2.js'

import Tableau from './Tableau.js'

export default class Configuration extends Component {
	constructor(){
		super()


		this.stateOptions = [ { key: '0', value: '0', text: 'Alabama' },{ key: '1', value: '1', text: 'Alabama' }  ]
	}

	render(){
		return (


			<div>
				<Titre1></Titre1>
				 <Dropdown placeholder='State' search selection options={this.stateOptions} />
				<Tableau></Tableau>
				<Titre2></Titre2>
				<Form onSubmit={this.handleSubmit}>


					<Form.Input label="Titre de l'annonce" name='titreDeLAnnonce' placeholder='Choisissez un titre' />

					<Form.TextArea name='DescriptionDeLArticle' label="description de l'article" placeholder="Decrire l'article" rows='3' />
					<h4>Inserer une piece jointe</h4>
					<br/>
					<Icon size ='huge' name='camera'/>
    					<Icon size ='huge'  name='paste'  />
					<br/>
					<br/>
					<Button primary type='submit'>Submit</Button>

				</Form>
			</div>

		);
	}
}
