import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
import Titre1 from './monCompte/Titre1.js'
import { Rating, Button, Table, Icon, Image as ImageComponent, Item, Label,Input,TextArea,Container } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../API/annonces.js'
import {usr} from '../API/usr.js'
import {propositions} from '../API/propositions.js'
import {menu} from '../API/menu.js'

class  AnnonceDes extends Component {

	constructor(){
		super();
		this.state={
				annonce:{},
				usr:{},
				prix:0,
				commentaire:""
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
	change(e){
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
	};
	getUtilisateur(usr){
		this.props.usr.recupNom(usr,(err,res)=>{
			if(res){
				this.setState({usr:res})
			}
		})
	}

	creeProp(){

		this.props.propositions.ajout(
			{
				annonceId:this.state.annonce._id,
				prix:this.state.prix,
				commentaire:this.state.commentaire,
				utilisateur:{
					_id:this.props.usr.usrCo._id,
					username:this.props.usr.usrCo.username,
					note:this.props.usr.usrCo.profile.note
				}
			},(err)=>{}
		)
		/*this.setState({
			prix:0,
			commentaire:""
		})*/
	}
	componentWillMount(){
		this.props.setActif('Annonces')
		this.getAnnonce(this.props.titre)
	}

	fiche(){
			if(this.state.annonce.titre&&this.state.usr.username){
				var date = new Date(this.state.annonce.date)

		return(

			<Table celled fixed textAlign="center">
				<Table.Body>
					<Table.Row>
						<Table.Cell colSpan='2'>
							<Item>
								<Item.Image src='https://placehold.it/200x200' />
							</Item>
						</Table.Cell>
						<Table.Cell colSpan='2' rowSpan='5'>
							<span className="titreTableauAnn">{this.state.annonce.titre}</span><br/><br/>

							 	{this.state.annonce.description}


						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableau">Categorie</Table.Cell>
						<Table.Cell>{this.state.annonce.categorie}</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableau">Date de début</Table.Cell>
						<Table.Cell>{
							(date.getUTCDate()<10?"0"+date.getUTCDate():date.getUTCDate())+"/"+
							((date.getUTCMonth() + 1)<10?"0"+(date.getUTCMonth() + 1):(date.getUTCMonth() + 1))
							+"/"+date.getUTCFullYear()}</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableau">Date de Fin</Table.Cell>
						<Table.Cell>{this.state.annonce.dateDeFin}</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell className="titreTableau">Statut</Table.Cell>
						<Table.Cell></Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableau" colSpan='4'>Informations séliste</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell colSpan='4'>
							{this.state.usr.profile.prenom+" "+this.state.usr.profile.nom}
						 	<Rating icon='star' disabled rating={this.state.usr.profile.note} maxRating={4} />
						 </Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell colSpan='4'>{this.state.usr.emails[0].address}</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableau" colSpan='4'>Proposition</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell colSpan='1' >Faire une proposition</Table.Cell>
						<Table.Cell colSpan='2'>Commentaire</Table.Cell>
						<Table.Cell colSpan='1' rowSpan='2' textAlign='center'>
							<Button type="submit" onClick={this.creeProp.bind(this)}>Valider</Button>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>
							<Input fluid
								name="prix"
								placeholder='proposez un prix'
								onChange={this.change.bind(this)}
								value={this.state.prix}
							/>
							<Label>Seugnettes</Label>
						</Table.Cell>
						<Table.Cell colSpan='2'>
							<TextArea
								rows='5'
								name="commentaire"
								placeholder='Mettez un commentaire'
								onChange={this.change.bind(this)}
								value={this.state.commentaire}
							/>
						</Table.Cell>

					</Table.Row>
				</Table.Body>
			</Table>

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
 			recupNom:usr.recupNom,
 			usrCo:usr.usrCo.get()
 		},
 		propositions:{
			ajout:propositions.ajout
 		},
 		setActif:menu.setActif
 	}

 } ,  AnnonceDes );
