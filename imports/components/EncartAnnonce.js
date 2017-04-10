import React, { Component } from 'react'

import { Card,Image,Grid,Label,Header,Segment } from 'semantic-ui-react'

/*Pour la page Annonces*/

export default class EncartAnnonce extends Component {

	render() {


		return (
			<div >
				 <Card fluid>

						<Grid >
							<Grid.Column width={4}>
								<Image floated='left' size='medium' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
							</Grid.Column>
							<Grid.Column width={8}>
								<Card.Header>
									{this.props.donnees.type+" - "+this.props.donnees.categorie}
								</Card.Header>

								<a href={"/annonces/"+this.props.donnees.titre}>
								<Header as="h2" >
									{this.props.donnees.titre}
								</Header></a>

								<br/>
								<Card.Meta>
									{this.props.donnees.description.slice(0, 50)+" ..."}
								</Card.Meta>
								<Card.Description>
									{this.props.donnees.dateDeFin}
								</Card.Description>


							</Grid.Column>


							<Label circular size='massive' color={'yellow'} key={'0'} attached="top right"></Label>


						</Grid>
					</Card>

			</div>
		)
	}
}
