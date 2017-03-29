import React, {Component} from 'react'
import FormulaireDInscription from "../components/FormulaireDInscription.js"
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

class CreerUnComptePubli extends Component {

	componentWillMount(){
		this.props.setActif('CreerUnCompte')
	}

	render(){
		return(
				<FormulaireDInscription  action={"creer"} acces={"public"}></FormulaireDInscription>
			)
	}
}

 export default CreerUnComptePublic = createContainer( ()=>{

 	return{
 		setActif:menu.setActif
 			}

 } , CreerUnComptePubli );


