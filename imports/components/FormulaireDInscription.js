import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class CreerUnCompte extends Component {

	constructor(){
		super()
		this.state={
			username:"",
			email:"",
			password:"",

			prenom:"",
			nom:"",
			tel:"",
			adresse:"",
			respC:false,
			dateValRespC:"",
			note:0,
			soldeSeugnette:0,
			totalCredits:0,
			totalDebits:0,
			role:["inscrit","selliste","moderateur","admin"]
		}

	}

	change(e){
		e.preventDefault()
		this.setState({[e.target.name]:e.target.value})
		if(e.target.name=="email"){this.setState({username:e.target.value})}
	}
	changeCompte(e){
		e.preventDefault()
		Meteor.call("sauvegardeUtilisateur",{

			username:this.state.username,
			email:this.state.email,
			password:this.state.password,
			profile:{
				prenom:this.state.prenom,
				nom:this.state.nom,
				tel:this.state.tel,
				adresse:this.state.adresse,
				respC:this.state.respC,
				dateValRespC:this.state.dateValRespC,
				note:this.state.note,
				soldeSeugnette:this.state.soldeSeugnette,
				totalCredits:this.state.totalCredits,
				totalDebits:this.state.totalDebits,
				role:this.state.role
			}
		}, (err)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'enregistrer ce compte" ,
					type:'error'}
			)}else{
				Bert.alert({
					title:"Compte enregistré",
					message:"Votre compte "+this.state.username+" a été enregistré" ,
					type:'success'
				})
			}
		})
		if(this.props.remiseA0){this.props.remiseA0()}
	}
	creerCompte(e){
		e.preventDefault()
		Accounts.createUser({

			username:this.state.username,
			email:this.state.email,
			password:this.state.password,
			profile:{
				prenom:this.state.prenom,
				nom:this.state.nom,
				tel:this.state.tel,
				adresse:this.state.adresse,
				respC:this.state.respC,
				dateValRespC:this.state.dateValRespC,
				note:this.state.note,
				soldeSeugnette:this.state.soldeSeugnette,
				totalCredits:this.state.totalCredits,
				totalDebits:this.state.totalDebits,
				role:this.state.role
			}
		}, (err)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'enregistrer ce compte" ,
					type:'error'}
			)}else{
				Bert.alert({
					title:"Compte enregistré",
					message:"Votre compte "+this.state.username+" a été enregistré" ,
					type:'success'
				})
			}
		})
		if(this.props.remiseA0){this.props.remiseA0()}
	}
	componentWillMount() {
				if(this.props.donnees){
						console.log(this.props.donnees)

					this.setState({
						username:this.props.donnees.username,
						email:this.props.donnees.username,
						password:this.props.donnees.password,

							prenom:this.props.donnees.profile.prenom,
							nom:this.props.donnees.profile.nom,
							tel:this.props.donnees.profile.tel,
							adresse:this.props.donnees.profile.adresse,
							respC:this.props.donnees.profile.respC,
							dateValRespC:this.props.donnees.profile.dateValRespC,
							note:this.props.donnees.profile.note,
							soldeSeugnette:this.props.donnees.profile.soldeSeugnette,
							totalCredits:this.props.donnees.profile.totalCredits,
							totalDebits:this.props.donnees.profile.totalDebits,
							role:this.props.donnees.profile.role

					})
				}
		}
	pass(){
		if(this.props.action){
			if(this.props.action=="creer"){
				return(
					<Form.Input
						label="Mot de passe"
						name="password"
						type="password"
						placeholder='Mot de passe'
						onChange={this.change.bind(this)}
						value={this.state.password}
					/>
				)
			}
		}
	}
	boutonAAff(){
		if(this.props.action){
			if(this.props.action=="editer"){
				return(<Button type='submit' onClick={this.changeCompte.bind(this)}>Modifier ce Compte</Button>)
			}
			if(this.props.action=="creer"){
				return(<Button type='submit' onClick={this.creerCompte.bind(this)}>Creer ce Compte</Button>)
			}
		}
	}

	render(){
		return(
			<div>
			 <Form id="contact">
				<label><h1>Creer un Compte</h1></label>
					<Form.Input
						label="Courriel"
						name="email"
						placeholder='exemple@exemple.com'
						onChange={this.change.bind(this)}
						value={this.state.email}
					/>
					{this.pass()}


					<Form.Input
						label="Nom"
						name="nom"
						placeholder='Nom'
						onChange={this.change.bind(this)}
						value={this.state.nom}
					/>

					<Form.Input
						label="Prénom"
						name="prenom"
						placeholder='Prénom'
						onChange={this.change.bind(this)}
						value={this.state.prenom}
					/>

					<Form.Input
						label="Téléphone"
						name="tel"
						placeholder='Téléphone'
						onChange={this.change.bind(this)}
						value={this.state.tel}
					/>

					<Form.TextArea
						name='adresse'
						label='Adresse'
						placeholder='Veuillez indiquer votre adresse'
						rows='3'
						onChange={this.change.bind(this)}
						value={this.state.adresse}
					/>



					<Form.Input
						label="Date de validité de votre responsabilité civil"
						name="dateValRespC"
						placeholder='Date de validité de votre responsabilité civil'
						onChange={this.change.bind(this)}
						value={this.state.dateValRespC}
					/>

			</Form>
			{this.boutonAAff()}
			</div>

			)
	}
}


