import React, { Component } from 'react'

import { Card,Image,Grid,Label,Header } from 'semantic-ui-react'

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
							<Grid.Column width={6}>
								<Card.Header>
									{this.props.donnees.type}+" - "+{this.props.donnees.categorie}
								</Card.Header>

								<a href={"/annonces/"+this.props.donnees.titreDeLAnnonce}><Header as="h2" >
									{this.props.donnees.titreDeLAnnonce}
								</Header></a>

								<br/>
								<Card.Meta>
									{this.props.donnees.descriptionDeLAnnonce.slice(0, 50)+" ..."}
								</Card.Meta>
								<Card.Description>
									{this.props.donnees.dateDeFin}
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
