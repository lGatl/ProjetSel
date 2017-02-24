import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Tableau from '../Tableau.js'
import Solde from '../Solde.js'

export default class MonReleve extends Component {
	render(){
		return (


			<div>
				<Solde></Solde> <br/> <br/><br/>
				<Titre1 nom="Liste des debits"></Titre1>
				<Tableau></Tableau>
				<Titre1 nom="Liste des credits"></Titre1>
				<Tableau></Tableau>
			</div>

		);
	}
}
