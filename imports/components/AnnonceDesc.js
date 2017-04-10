import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
import Titre1 from './monCompte/Titre1.js'
import { Rating, Button, Table, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../API/annonces.js'
import {usr} from '../API/usr.js'
import {menu} from '../API/menu.js'

class  AnnonceDes extends Component {

	constructor(){
		super();
		this.state={
				annonce:{},
				usr:{}
			};
	}

	getAnnonce(titre){
		this.props.annonces.recup1(titre,(err,res)=>{
				if(res){
					this.setState({annonce:res})
					this.getUtilisateur(this.state.annonce.utilisateur)
			}
		})
	}
	getUtilisateur(usr){
		this.props.usr.recupNom(usr,(err,res)=>{
			if(res){
				this.setState({usr:res})
			}
		})
	}
	componentWillMount(){
		this.props.setActif('Annonces')
		this.getAnnonce(this.props.titre)
	}

	fiche(){
			if(this.state.annonce.titre&&this.state.usr.username){
				var date = new Date(this.state.annonce.date)

		return(
			<Segment>

			{console.log("this.state.annonce.dateDeDebut", this.state.annonce)}
				<Segment.Group horizontal >
					<Segment >
							<Item>
								<Item.Image src='https://placehold.it/200x200' />
							</Item>

								<Table celled>
									<Table.Header>
										<Table.Row>
											<Table.HeaderCell>{this.state.annonce.categorie}</Table.HeaderCell>
											<Table.HeaderCell></Table.HeaderCell>
										</Table.Row>
									</Table.Header>

									<Table.Body>
										<Table.Row>
											<Table.Cell>Date de début</Table.Cell>
											<Table.Cell>{
												(date.getUTCDate()<10?"0"+date.getUTCDate():date.getUTCDate())+"/"+
												((date.getUTCMonth() + 1)<10?"0"+(date.getUTCMonth() + 1):(date.getUTCMonth() + 1))
												+"/"+date.getUTCFullYear()}</Table.Cell>
										</Table.Row>
										<Table.Row>
											<Table.Cell>Date de Fin</Table.Cell>
											<Table.Cell>{this.state.annonce.dateDeFin}</Table.Cell>
										</Table.Row>
										<Table.Row>
											<Table.Cell>Statut</Table.Cell>
											<Table.Cell>Disponible</Table.Cell>
										</Table.Row>
									</Table.Body>
								</Table>
						</Segment>
					<Segment >
						<Titre1 nom={this.state.annonce.titre}/>
						<span>{this.state.annonce.description}</span>
					</Segment>
				</Segment.Group>


				<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Informations séliste</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>{this.state.usr.profile.prenom+" "+this.state.usr.profile.nom} <Rating icon='star' disabled rating={this.state.usr.profile.note} maxRating={4} /></Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>{this.state.usr.emails[0].address}</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>

				<Titre1 nom="Proposition" />

				<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Faire une proposition</Table.HeaderCell>
								<Table.HeaderCell>Commentaire</Table.HeaderCell>
								<Table.HeaderCell></Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell></Table.Cell>
								<Table.Cell></Table.Cell>
								<Table.Cell textAlign='center'><Button>Valider</Button></Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
			</Segment>
		)}
	}

	render(){
		return(
			<div>
				{this.fiche()}
			</div>
		)
	}
}
export default AnnonceDesc = createContainer( ()=>{

 	return{
 		annonces:{
 			liste:annonces.liste.get(),
 			recup1:annonces.recup1
 		},
 		usr:{
 			recupNom:usr.recupNom
 		},
 		setActif:menu.setActif
 	}

 } ,  AnnonceDes );
