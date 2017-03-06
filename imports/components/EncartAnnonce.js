import React, { Component } from 'react'

import { Card,Image,Grid,Label } from 'semantic-ui-react'

/*Pour la page Annonces*/

export default class EncartAnnonce extends Component {

	render() {

		return (
			<div>
				 <Card fluid>

						<Grid >
							<Grid.Column width={4}>
								<Image floated='left' size='medium' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
							</Grid.Column>
							<Grid.Column width={6}>
								<Card.Header>
									Titre de l'Annonce
								</Card.Header>
								<br/>
								<Card.Meta>
									Description
								</Card.Meta>
								<Card.Description>
									Date de mise en ligne
								</Card.Description>


							</Grid.Column>
							<Grid.Column width={6}>

							<Label circular size='massive' color={'yellow'} key={'0'}></Label>

							</Grid.Column>
						</Grid>
					</Card>

			</div>
		)
	}
}
