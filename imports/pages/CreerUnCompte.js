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
	}


	render(){
		return(
			 <Form id="contact">
				<label><h1>Creer un Compte</h1></label>

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
						label="Courrile"
						name="email"
						placeholder='exemple@exemple.com'
						onChange={this.change.bind(this)}
						value={this.state.email}
					/>
					<Form.Input
						label="Mot de passe"
						name="password"
						type="password"
						placeholder='Mot de passe'
						onChange={this.change.bind(this)}
						value={this.state.password}
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

					<Button type='submit' onClick={this.creerCompte.bind(this)}>Creer un compte</Button>
			</Form>
			)
	}
}

/**/
