import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Tableau from '../Tableau.js'

export default class Statistiques extends Component {
	constructor(){
		super()
		this.stats={
			titres:["colonne1","colonne2"],
			contenu:[
						["un truc","un autre truc"],
						["encore un truc","et pour finir un truc"],
						["encore un truc","et pour finir un truc"],
						["encore un truc","et pour finir un truc"],
						["encore un truc","et pour finir un truc"],
						["encore un truc","et pour finir un truc"]

					]
		}
	}
	render(){
		return (


			<div>
				<Titre1 nom="Statistiques"></Titre1>
				<Tableau donnees={this.stats}></Tableau>
			</div>

		);
	}
}
