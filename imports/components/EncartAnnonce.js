import React, { Component } from 'react'

import { Card,Image,Grid,Label,Header,Segment } from 'semantic-ui-react'

/*Pour la page Annonces*/

export default class EncartAnnonce extends Component {

	render() {
		avencement={couleur:"green"}
			if(this.props.propositions.length>0){
				this.props.propositions.map((proposition,i)=>{
					if(proposition.annonceId==this.props.donnees._id){
						if(proposition.etat=="Validé"&&!(avencement.couleur=="red")){avencement={couleur:'orange'}}
						if(proposition.etat=="Effectué"){avencement={couleur:'red'}}
					}
				})
			}

		return (
			<div >
				 <Card fluid>

						<Grid >
							<Grid.Column width={4}>
								<Image floated='left' size='medium' src='http://lorempixel.com/500/500' />
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
									{this.props.donnees.dateDeFin}
								</Card.Description>


							</Grid.Column>


							<Label circular size='massive' color={avencement.couleur} key={'0'} attached="top right"></Label>


						</Grid>
					</Card>
					<br/>

			</div>
		)
	}
}
