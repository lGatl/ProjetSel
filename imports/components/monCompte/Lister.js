import React, {Component} from 'react'
import {Segment, Rating,List } from 'semantic-ui-react'



export default class Lister extends Component {
	render(){
		return (

			<Segment>
				<List>
					<List.Item>NOM</List.Item>
					<List.Item>PRENOM</List.Item>
					<List.Item>MAIL</List.Item>
					<List.Item>ADRESSE POSTALE</List.Item>
					<List.Item>TELEPHONE</List.Item><br/>
					<List.Item>COMPAGNIE D'ASSURANCE RESPONSABILITE CIVILE</List.Item>
					<List.Item>DATE DE VALIDITE</List.Item><br/>
					<List.Item>(données du formulaire d'inscription)</List.Item><br/>
					<List.Item>
						Note: <Rating icon='star' defaultRating={3} maxRating={4} />
					</List.Item>

				</List>
			</Segment>

		);
	}
}

