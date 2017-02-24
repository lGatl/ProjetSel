import React, { Component } from 'react'
import { Button, Form, Input, Select, TextArea,Image,Label } from 'semantic-ui-react'
import Titre1 from './Titre1.js'
/*Depot Offre et Depot Demande*/

const categories = [
	{ key: 'm', text: 'Male', value: 'male' },
	{ key: 'f', text: 'Female', value: 'female' },
]

const products = [
	{ key: 'hat', text: 'Hat', value: 'hat' },
	{ key: 'scarf', text: 'Scarf', value: 'scarf' },
	{ key: 'jacket', text: 'Jacket', value: 'jacket' },
	{ key: 't_shirt', text: 'T-Shirt', value: 't_shirt' },
	{ key: 'gloves', text: 'Gloves', value: 'gloves' },
	{ key: 'watch', text: 'Watch', value: 'watch' },
	{ key: 'belt', text: 'Belt', value: 'belt' },
	{ key: 'pants', text: 'Pants', value: 'pants' },
	{ key: 'shoes', text: 'Shoes', value: 'shoes' },
	{ key: 'socks', text: 'Socks', value: 'socks' },
]

export default class DepotAnnonce extends Component {
	constructor(){
		super()
		this.state = { formData: {} }

	this.handleChange = (e, { value }) => this.setState({ value })

	this.handleSubmit = (e, { formData }) => {
		e.preventDefault()
		this.setState({ formData })
	}
	}


	render() {
		const { formData, value } = this.state
		return (
			<div>

				<Titre1 nom={this.props.titre}></Titre1>
				<br/>
				<Label size='large' >Votre Offre</Label>
				<br/> <br/>
				<Form onSubmit={this.handleSubmit}>


					<Form.Select label='Categorie' name='categorie' options={categories} placeholder='Categorie' />
					<Form.Input label="Titre de l'annonce" name='titreDeLAnnonce' placeholder='Choisissez un titre' />

					<Form.TextArea name='DescriptionDeLAnnonce' label="description de l'annonce" placeholder='Presentez votre offre' rows='3' />
					<Form.TextArea name='InformationDeContact' label='Information de Contact' placeholder='tel, adresse, mail, ...' rows='3' />
						<Form.Input label="Date de fin" name='dateDeFin' placeholder='Date de fin' />
					<Image src='/assets/images/wireframe/image.png' size='small' />
					<Image src='/assets/images/wireframe/image.png' size='small' />
					<Image src='/assets/images/wireframe/image.png' size='small' />

					<Button primary type='submit'>Submit</Button>

				</Form>
			</div>
		)
	}
}


