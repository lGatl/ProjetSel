import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class FormContact extends Component {

	constructor(){
		super()
		this.courriel={
			prenom:"",
			nom:"",
			mail:"",
			tel:"",
			sujet:"",
			message:""
		}

		this.state={courriel:this.courriel}
	}

	miseEnVarNom(e){
		e.preventDefault();
		this.courriel.nom=e.target.value
		this.maj()
	}

	miseEnVarPrenom(e){
		e.preventDefault();
		this.courriel.prenom=e.target.value
		this.maj()
	}

	miseEnVarMail(e){
		e.preventDefault();
		this.courriel.mail=e.target.value
		this.maj()
	}

	miseEnVarTel(e){
		e.preventDefault();
		this.courriel.tel=e.target.value
		this.maj()
	}

	miseEnVarSujet(e){
		e.preventDefault();
		this.courriel.sujet=e.target.value
		this.maj()
	}

	miseEnVarMessage(e){
		e.preventDefault();
		this.courriel.message=e.target.value
		this.maj()
	}

	maj(){
		this.setState({courriel:this.courriel})
	}

	render(){
		return(
			 <Form id="contact">
				<label><h1>Formulaire de Contact</h1></label>
					<Form.Input label="Nom" id="nom" placeholder='Nom' onChange={this.miseEnVarNom.bind(this)} />
					<Form.Input label="Prénom" id="prenom" placeholder='Prénom' onChange={this.miseEnVarPrenom.bind(this)}/>
					<Form.Input label="Email" id="mail" placeholder='exemple@exemple.com' onChange={this.miseEnVarMail.bind(this)}/>
					<Form.Input label="Téléphone" id="tel" placeholder='Téléphone' onChange={this.miseEnVarTel.bind(this)}/>
					<Form.TextArea id='sujet' label='Motif de votre message' placeholder='motif' rows='1' onChange={this.miseEnVarSujet.bind(this)}/>
					<Form.TextArea id='message' label='Votre message' placeholder='Votre message' rows='3' onChange={this.miseEnVarMessage.bind(this)}/>
					<Button type='submit' href={
						"mailto:tornade.50@hotmail.fr?subject=" +
						this.state.courriel.sujet +
						"&body=" + "Prénom et Nom : " +
						this.state.courriel.prenom +
						this.state.courriel.nom +
						 "%0A" + "Email : " +
						 this.state.courriel.mail +
						 "%0A" +"Téléphone : " +
						 this.state.courriel.tel +
						 "%0A" +"Message : " +
						 this.state.courriel.message
					}>Envoyer</Button>
			</Form>
			)
	}
}

