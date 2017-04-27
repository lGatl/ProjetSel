import React, { Component } from 'react'

import { Card,Image,Grid,Label,Header,Segment } from 'semantic-ui-react'

/*Pour la page Annonces*/

export default class EncartAnnonce extends Component {

	render() {
			var date = new Date(Number(this.props.donnees.dateDeFin))
		return (
			<div >
				 <Card fluid>

						<Grid >
							<Grid.Column width={4}>
								<Image floated='left' size='medium' src='http://lorempixel.com/50/50' />
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
									{this.props.donnees.description.slice(0, 30)+" ..."}
								</Card.Meta>
								<Card.Description>
									{
										(date.getUTCDate()<10?" 0"+date.getUTCDate():" "+date.getUTCDate())+"/"+
										((date.getUTCMonth() + 1)<10?"0"+(date.getUTCMonth() + 1):(date.getUTCMonth() + 1))
										+"/"+date.getUTCFullYear()
									}
								</Card.Description>


							</Grid.Column>


							<Label circular size='massive' color={this.props.donnees.avancement} key={'0'} attached="top right"></Label>


						</Grid>
					</Card>
					<br/>

			</div>
		)
	}
}
