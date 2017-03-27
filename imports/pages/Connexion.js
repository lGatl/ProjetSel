import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import{log}from'../API/API.js'
import {Form, Button } from 'semantic-ui-react';



class Connexio extends Component {

	constructor(){
		super();
		this.state={
			email: "",
			pass: ""
		};
	}

	handleChange(e){
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e){
		e.preventDefault();
		log(this.state.email, this.state.pass)
	}

	render(){
		if(this.props.loggedin){
			return(<div>Vous etes deja connecté!!!!</div>)
		}else{
			return(
				<Form >
					<Form.Input
						name="email"
						onChange={this.handleChange.bind(this)}
						value={this.state.email}
						label="Courriel"
						placeholder="mon@mail.com" />
					<Form.Input
						name="pass"
						onChange={this.handleChange.bind(this)}
						value={this.state.pass}
						label="Mot de passe"
						type="password" />
					<Button onClick={this.handleSubmit.bind(this)}>Connexion</Button>

				</Form>
			);
		}
	}
}

 var Connexion = createContainer( ()=>{
	 return {
		 loggedin: Meteor.userId()
	 };
 } , Connexio );

 export default Connexion;
