import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class FormContact extends Component {

	constructor(){
		super()
		this.state={
			prenom:"",
			nom:"",
			mail:"",
			tel:"",
			sujet:"",
			message:""
		}
	}

	change(e){
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
	};

	render(){
		return(
			 <Form id="contact">
				<label><h1>Formulaire de Contact</h1></label>
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
							label="Email"
							name="mail"
							placeholder='exemple@exemple.com'
							onChange={this.change.bind(this)}
							value={this.state.mail}
					/>
					<Form.Input
							label="Téléphone"
							name="tel"
							placeholder='Téléphone'
							onChange={this.change.bind(this)}
							value={this.state.tel}
					/>
					<Form.TextArea
							name='sujet'
							label='Motif de votre message'
							placeholder='motif'
							rows='1'
							onChange={this.change.bind(this)}
							value={this.state.sujet}
					/>
					<Form.TextArea
							name='message'
							label='Votre message'
							placeholder='Votre message'
							rows='3'
							onChange={this.change.bind(this)}
							value={this.state.message}
					/>
					<Button type='submit' href={
						"mailto:0_never_forever_0@live.fr?subject=" +
						this.state.sujet +
						"&body=" + "Nom et Prénom : " +
						this.state.nom + " " +
						this.state.prenom +
						 "%0A" + "Email : " +
						 this.state.mail +
						 "%0A" +"Téléphone : " +
						 this.state.tel +
						 "%0A" +"Message : " +
						 this.state.message
					}>Envoyer</Button>
			</Form>
			)
	}
}

