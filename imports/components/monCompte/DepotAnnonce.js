import React, { Component } from 'react'
import { Button, Form, Input, Select, TextArea,Image,Label } from 'semantic-ui-react'
import Titre1 from './Titre1.js'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../../API/annonces.js'


class DepotAnnonc extends Component {
	constructor(){
		super()

		this.state = {
			type:"",
			titreDeLAnnonce:"",
			descriptionDeLAnnonce:"",
			informationDeContact:"",
			dateDeFin:"",
			utilisateur:"",
			etat:"En Attente",
			categories:[],
			categorie:""
		}

		this.handleChange = (e,{value}) => this.setState({categorie:value })

	}

	componentWillMount(){
		this.setState({type:this.props.type})
		this.getCategories()
		this.connecte()
	}
	connecte(){
		Meteor.call('utilisateur',(err,res)=>{
			if(err){

			}else{
				if(res){this.setState({utilisateur:res._id})}
			}
		})
	}
	getCategories(){
		Meteor.call('listeCategories',(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de recuperer les Categories" ,
					type:'error'
			})
			}else{

				var cate=[]
				res.map((cat)=>{
					if(cat.etat=="Editer"){
						cate.push({ key:cat.categorie, text: cat.categorie, value: cat.categorie })
					}
				})
				this.setState({categories:cate})
			}
		})
	}
	valider(e){
		e.preventDefault()
		this.props.annonces.ajout(this.state)
		this.setState( {
			type:"",
			titreDeLAnnonce:"",
			descriptionDeLAnnonce:"",
			informationDeContact:"",
			dateDeFin:"",
			etat:"En Attente",
			categories:[],
			categorie:"",
			utilisateur:""
		})
		this.getCategories()
	}

	change(e){
			this.setState({
				[e.target.name]:e.target.value
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
						options={this.state.categories}
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

export default DepotAnnonce = createContainer( ()=>{

 	return{
 		annonces:{
 			liste:annonces.liste.get(),
 			sauve:annonces.sauve,
 			supprime:annonces.supprime,
 			ajout:annonces.ajout
 		}
 	}

 } , DepotAnnonc );
