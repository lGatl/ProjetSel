
import React, { Component } from 'react'

import { Button, Card,Image,Grid,Label,Segment,Confirm } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../../API/annonces.js'


class ExtraitAnnonc extends Component {
	constructor(){
		super()
		this.state = {
			open: false,
			edit:false
		 }

		this.show = () => this.setState({ open: true })
		this.handleConfirm = () => {
			this.setState({ open: false,edit:false })
			var titre = this.props.donnees.titre
			this.props.annonces.supprime(this.props.donnees._id,(err)=>{
				if(err){}else{
					Bert.alert({
					title:"Annonce supprimée",
					message:"Votre annonce "+titre+" a été supprimée" ,
					type:'success'
				})

				}
			})

		}
		this.handleCancel = () => this.setState({ open: false })
	}

	editer(){
		var ann=this.props.donnees
		if(this.state.edit){this.setState({edit: false})}else{
			this.setState({edit:(
				<div>
					<br/>
					<hr/>
					<br/>
					<DepotAnnonce type={ann.type} donnees={ann} zero={this.zero.bind(this)} action="Editer"></DepotAnnonce>
					<br/>
					<hr/>
					<br/>
				</div>
			)})
		}
	}

	zero(){
		this.setState({edit: false})
	}
	supprimer(e){
		e.preventDefault()
		this.setState({ open: true })

	}
	render() {
		etat={}
			this.props.donnees.etat=="En Attente"?etat={etat:"En Attente",couleur:"blue"}:
			this.props.donnees.etat=="Valider"?etat={etat:"Valide",couleur:"green"}:
			this.props.donnees.etat=="Refuser"?etat={etat:"Refusée",couleur:"red"}:etat={}
		return (
			<div>
				 <Card fluid>

						<Grid >
							<Grid.Column mobile={4} tablet={4} computer={4}>
								<Image floated='left' size='medium' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
							</Grid.Column>
							<Grid.Column mobile={12} tablet={6} computer={6}>
								<Card.Header>
									<a href={"/annonces/"+this.props.donnees.titre} className="aSpe">
											{this.props.donnees.titre}
									</a> <span style={{color:etat.couleur,fontWeight:"bold"}}>{etat.etat}</span>
								</Card.Header>
								<br/>
								<Card.Meta>{this.props.donnees.description.slice(0, 50)+" ..."}
								</Card.Meta>
								<Card.Description>
									Date de mise en ligne
								</Card.Description>

							</Grid.Column>
							<Grid.Column mobile={12} tablet={6} computer={6}  verticalAlign ="bottom" >

										<Label className="labelAn" size="big">18</Label>

								<Grid.Column mobile={12} tablet={12} computer={12}>
									<Card.Content extra  >
											<div className='ui two buttons'>
												<Button
													color='green'
													onClick={this.editer.bind(this)}
												>Editer</Button>

												<Button
													color='red'
													onClick={this.supprimer.bind(this)}
												>Supprimer</Button>
												<Confirm
													open={this.state.open}
													content={'Etes-vous sur de vouloir supprimer cet article : '+this.props.donnees.titre+" ?"}
													cancelButton='Non'
		         										confirmButton="OUI"
													onCancel={this.handleCancel}
													onConfirm={this.handleConfirm}
												/>
											</div>
										</Card.Content>
									</Grid.Column>
								</Grid.Column>
								<Label circular size='massive' color={'yellow'} key={'0'} attached="top right"></Label>
						</Grid>

					</Card>
					<br/>
					{this.state.edit}
			</div>
		)
	}
}
export default ExtraitAnnonce = createContainer( ()=>{

 	return{

 		annonces:{
 			supprime:annonces.supprime,
 		}
 	}

 } ,  ExtraitAnnonc );
