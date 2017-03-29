import React, {Component} from 'react'
import { Card, Icon, Image, Dropdown, Rating,Label } from 'semantic-ui-react'
import MenuDeroulant from './MenuDeroulant.js';

/* pour la page Les Selisete*/

export default class CartesSeliste extends Component {
constructor(){
	super()
	this.actions={titre:"actions",contenu:["Valider","Refuser","Editer","Suspendre","Admin","Moderateur","Ajouter seugnettes","Supprimer"]}
}


	render(){
			var role=""
			if(this.props.utilisateur.profile.role){
				if(this.props.utilisateur.profile.role=="se"){role="Seliste"}
				if(this.props.utilisateur.profile.role=="ad"){role="Administrateur"}
				if(this.props.utilisateur.profile.role=="mo"){role="Moderateur"}

			}
		return (
			<Card >
				 <Card.Content>
					<Image floated='left' size='tiny' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
					<Card.Header>
						{this.props.utilisateur.profile.prenom+" "+this.props.utilisateur.profile.nom}
					</Card.Header>
							<Rating icon='star' defaultRating={this.props.utilisateur.profile.note} maxRating={4} />
					<Card.Description>
						Catégiorie offre:
						<ul>
							<li>Mécanique</li>
							<li>Cuisine</li>
						 </ul> <strong>Role</strong>
							<Label>{role}</Label>
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					Ancienneté : {((Date.parse(Date())-Date.parse(this.props.utilisateur.createdAt))/(3600000*24)).toFixed(2)+"jours"}
				</Card.Content>
			</Card>
		);
	}
}
