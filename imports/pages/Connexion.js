import React, {Component} from 'react'

import {Form, Button } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {usr} from '../API/usr.js'

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
		usr.co(this.state.email, this.state.pass,(res)=>{})

	}

	render(){
		if(this.props.logged){
			return(<div>Vous etes deja connecté!!!!</div>)
		}else{
			return(
				<Form className="segconnexion">
					<Form.Input
						name="email"
						onChange={this.handleChange.bind(this)}
						value={this.state.email}
						label="email"
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
		 logged: usr.logged.get(),
	 };
 } , Connexio );

 export default Connexion;
