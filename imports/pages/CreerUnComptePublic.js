import React, {Component} from 'react'
import FormulaireDInscription from "../components/FormulaireDInscription.js"

export default class CreerUnComptePublic extends Component {

	render(){
		return(
				<FormulaireDInscription  action={"creer"} acces={"public"}></FormulaireDInscription>
			)
	}
}


