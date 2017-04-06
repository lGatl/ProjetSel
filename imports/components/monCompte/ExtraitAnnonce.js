
import React, { Component } from 'react'

import { Button, Card,Image,Grid,Label } from 'semantic-ui-react'



export default class ExtraitAnnonce extends Component {

	render() {

		return (
			<div>
				 <Card fluid>

						<Grid >
							<Grid.Column mobile={4} tablet={4} computer={4}>
								<Image floated='left' size='medium' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
							</Grid.Column>
							<Grid.Column mobile={12} tablet={6} computer={6}>
								<Card.Header>
									Titre de mon annonce
								</Card.Header>
								<br/>
								<Card.Meta>
									Description
								</Card.Meta>
								<Card.Description>
									Date de mise en ligne
								</Card.Description>

							</Grid.Column>
							<Grid.Column mobile={12} tablet={6} computer={6} verticalAlign="bottom">

							<Card.Content extra>
									<div className='ui two buttons' >
										<Button  color='green'>Approuver</Button>
										<Button color='red'>Décliner</Button>
									</div>
								</Card.Content>
							</Grid.Column>
							<Label circular size='massive' color={'yellow'} key={'0'} attached="top right"></Label>
						</Grid>

					</Card>

			</div>
		)
	}
}
