import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Tableau from '../Tableau.js'
import { Button} from 'semantic-ui-react'


export default class Statistiques extends Component {
	render(){
		return (


			<div>
				<Titre1 nom="Configuration"></Titre1>
				<Tableau></Tableau>
				<Button>Valider</Button>
			</div>

		);
	}
}
