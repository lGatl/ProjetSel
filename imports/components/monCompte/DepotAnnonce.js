import React, { Component } from 'react'
import { Button, Form, Input, Select, TextArea,Image,Label } from 'semantic-ui-react'
import Titre1 from './Titre1.js'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../../API/annonces.js'
import {categories} from '../../API/categories.js'
import {usr} from '../../API/usr.js'


class DepotAnnonc extends Component {
	constructor(){
		super()

		this.state = {
			type:"",
			titre:"",
			description:"",
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
		this.setState({utilisateur:this.props.usr.usrCo})
		if(this.props.donnees){this.recup(this.props.donnees)}
	}
	recup(donn){
		this.setState({
			type:donn.type,
			titre:donn.titre,
			description:donn.description,
			informationDeContact:donn.informationDeContact,
			dateDeFin:donn.dateDeFin,
			utilisateur:donn.utilisateur,
			etat:"En Attente",
			categories:[],
			categorie:donn.categorie,
			_id:donn._id
		})

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
		this.props.categories.recup((res)=>{
			if(res){

				var cate=[]
				res.map((cat,i)=>{
					if(cat.etat=="Publier"){
							cate.push({ key:i, text: cat.categorie, value: cat.categorie })
							}
				})
				this.setState({categories:cate})
			}})


	}
	valider(e){
		e.preventDefault()
		this.props.annonces.ajout(this.state)
		this.setState( {
			type:"",
			titre:"",
			description:"",
			informationDeContact:"",
			dateDeFin:"",
			etat:"En Attente",
			categories:[],
			categorie:"",
			utilisateur:this.props.usr.usrCo
		})
		this.getCategories()
	}
	bouton(){
		if(this.props.action=='Deposer'){
			return(
				<Button primary type='submit' onClick={this.valider.bind(this)}>Valider</Button>
			)
		}else{
			return(
				<div>
					<Button primary type='submit' onClick={this.modifier.bind(this)}>Modifier</Button>
					<Button primary type='submit' onClick={this.nePasEditer.bind(this)}>Ne pas Editer</Button>
				</div>
			)
		}
	}
	modifier(e){
		e.preventDefault()
		this.props.annonces.sauve(this.state)
		this.props.zero()
	}
	nePasEditer(e){
		e.preventDefault()
		this.props.zero()
			}
	change(e){
			this.setState({
				[e.target.name]:e.target.value
			})
	}


	render() {
		return (
			<div>

				<Titre1 nom={this.props.action+" une "+this.props.type}></Titre1>
				<br/>
				<Label size='large' >{"Votre "+this.props.type}</Label>
				<br/> <br/>
				<Form >


					<Form.Select
						label='Catégorie'
						name='categorie'
						options={this.state.categories}
						placeholder='Catégorie'
						onChange={this.handleChange}
						value={this.state.categorie}
						/>
					<Form.Input
						label="Titre de l'annonce"
						name='titre'
						placeholder='Choisissez un titre'
						onChange={this.change.bind(this)}
						value={this.state.titre}
					/>

					<Form.TextArea
						name='description'
						label="Description de l'annonce"
						placeholder='Presentez votre offre'
						rows='3'
						onChange={this.change.bind(this)}
						value={this.state.description}
					/>
					<Form.TextArea
						name='informationDeContact'
						label='Information de contact'
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

					{this.bouton()}

				</Form>
			</div>
		)
	}
}

export default DepotAnnonce = createContainer( ()=>{

 	return{
 		categories:{liste:categories.liste.get(),
 					recup:categories.recup},
 		annonces:{
 			liste:annonces.liste.get(),
 			sauve:annonces.sauve,
 			supprime:annonces.supprime,
 			ajout:annonces.ajout
 		},
 		usr:{usrCo:usr.usrCo.get().username}
 	}

 } , DepotAnnonc );
