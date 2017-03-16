import React, { Component } from 'react'
import { Button, Form, Input, Select, TextArea,Image,Label } from 'semantic-ui-react'
import Titre1 from './Titre1.js'
/*Depot Offre et Depot Demande*/

const categories = [
	{ key: 'h', text: 'Homme', value: 'homme' },
	{ key: 'f', text: 'Femme', value: 'femme' },
]

export default class DepotAnnonce extends Component {
	constructor(){
		super()
		this.state = {
			type:"",
			titreDeLAnnonce:"",
			descriptionDeLAnnonce:"",
			informationDeContact:"",
			dateDeFin:""
		}

		this.handleChange = (e,{value}) => this.setState({categorie:value })

	}

	componentWillMount(){
		this.setState({type:this.props.type})
	}

	valider(e){
		e.preventDefault()
		this.ajoutAnnonce()
		this.setState( {
			type:"",
			categorie:"",
			titreDeLAnnonce:"",
			descriptionDeLAnnonce:"",
			informationDeContact:"",
			dateDeFin:""
		})

	}
	change(e){
			this.setState({
				[e.target.name]:e.target.value
			})
	}

	ajoutAnnonce(){
		Meteor.call('ajoutAnnonce', this.state ,(err,res)=>{
			if(err||res==false){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter l'article" ,
					type:'error'
				})
			}else{

				Bert.alert({
					title:"Article sauvegardé",
					message:"Votre annonce "+this.state.titreDeLAnnonce+" a été sauvegardé" ,
					type:'success'
				})
			}
		})

	}

	render() {

		return (
			<div>

				<Titre1 nom={"Deposer une "+this.props.type}></Titre1>
				<br/>
				<Label size='large' >{"Votre "+this.props.type}</Label>
				<br/> <br/>
				<Form >


					<Form.Select
						label='Categorie'
						name='categorie'
						options={categories}
						placeholder='Categorie'
						onChange={this.handleChange}
						value={this.state.categorie}
						/>
					<Form.Input
						label="Titre de l'annonce"
						name='titreDeLAnnonce'
						placeholder='Choisissez un titre'
						onChange={this.change.bind(this)}
						value={this.state.titreDeLAnnonce}
					/>

					<Form.TextArea
						name='descriptionDeLAnnonce'
						label="Description de l'annonce"
						placeholder='Presentez votre offre'
						rows='3'
						onChange={this.change.bind(this)}
						value={this.state.descriptionDeLAnnonce}
					/>
					<Form.TextArea
						name='informationDeContact'
						label='Information de Contact'
						placeholder='tel, adresse, mail, ...'
						rows='3'
						onChange={this.change.bind(this)}
						value={this.state.informationDeContact}
					/>
					<Form.Input
						label="Date de fin"
						name='dateDeFin'
						placeholder='Date de fin'
						onChange={this.change.bind(this)}
						value={this.state.dateDeFin}
						/>
					<Image
						src='/assets/images/wireframe/image.png'
						size='small'
					/>
					<Image
						src='/assets/images/wireframe/image.png'
						size='small'
					/>
					<Image
						src='/assets/images/wireframe/image.png'
						size='small'
					/>

					<Button primary type='submit' onClick={this.valider.bind(this)}>Valider</Button>

				</Form>
			</div>
		)
	}
}


