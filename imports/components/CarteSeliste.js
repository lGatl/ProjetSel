import React, {Component} from 'react'
import { Card, Icon, Image, Dropdown } from 'semantic-ui-react'
import MenuDeroulant from './MenuDeroulant.js';




export default class CartesSeliste extends Component {





	render(){

		return (
			<Card >
				 <Card.Content>
					<Image floated='left' size='tiny' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
					<Card.Header>
						Jean Bon
					</Card.Header>
							<span >*****</span>
					<Card.Description>
						Categiorie offre:
						<ul>
							<li>Mecanique</li>
							<li>Cuisine</li>
						 </ul> <strong>best friends</strong>
							<MenuDeroulant></MenuDeroulant>
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					Ancienneté : 6 mois
				</Card.Content>
			</Card>
		);
	}
}
