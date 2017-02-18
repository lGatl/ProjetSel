import React, {Component} from 'react'
import Titre from './Titre.js'
import Tableau from './Tableau.js'
import Solde from './Solde.js'

export default class MonReleve extends Component {
	render(){
		return (


			<div>
				<Solde></Solde> <br/> <br/><br/>
				<Titre></Titre>
				<Tableau></Tableau>
				<Titre></Titre>
				<Tableau></Tableau>
			</div>

		);
	}
}
