import React, {Component} from 'react'
import FormulaireDInscription from "../components/FormulaireDInscription.js"
import {createContainer} from 'meteor/react-meteor-data';

class CreerUnComptePubli extends Component {

	componentWillMount(){
	}

	render(){
		return(
				<FormulaireDInscription  action={"creer"} acces={"public"}></FormulaireDInscription>
			)
	}
}

 export default CreerUnComptePublic = createContainer( ()=>{

 	return{
 			}

 } , CreerUnComptePubli );


