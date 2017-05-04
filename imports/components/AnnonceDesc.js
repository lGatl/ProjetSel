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
				prix:0,
				commentaire:"",
				image:""
			};
	}
	rnd(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
	getAnnonce(titre){
		this.props.annonces.recup1(titre,(err,res)=>{
				if(res){
					this.setState({annonce:res})
			}
		})
	}
	change(e){
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
	};
bouton(e){
		e.preventDefault()

			var href=""
			var pre = this.props.menu.pre.get()
				if(pre=="Accueil"){href="/"}
				if(pre=="Kesako"){href="/kesako"}
				if(pre=="Annonces"){href="/annonces"}
				if(pre=="Actualites"){href="/actualites"}
				if(pre=="Contact"){href="/contacts"}
				if(pre=="MonCompte"){
					href="/monCompte"
					this.props.menu.pre.set()
				}
				if(pre=="MonCompte"&&this.props.menu.monCompte.get()==true){}else{this.props.menu.monCompte.set(false)}
				if(pre=="LesSelistes"){href="/lesSelistes"}
				if(pre=="Creer un compte"){href="/creerUnCompte"}
				if(pre=="Connexion"){href="/connexion"}

			FlowRouter.go(href)
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
		this.setState({
				prix:0,
				commentaire:""
				})
	}
	componentWillMount(){
		this.getAnnonce(this.props.titre)
		this.setState({image:'/images/'+this.rnd(1,16)+'.jpg'})
	}

	fiche(){
			if(this.state.annonce.titre){
				var date = new Date(this.state.annonce.date)
		return(
			<Table celled fixed textAlign="center">
				<Table.Body>
					<Table.Row className="titreTableau">
						<Table.Cell  colSpan='4'>Informations de l'annonce</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell colSpan='2' style={{padding:0}}>
							<Item >
								<img src={this.state.image} style={{height:"300px",width:"300px"}} />
							</Item>
						</Table.Cell>
						<Table.Cell colSpan='2' rowSpan='5'>
							<span className="grosTitreTableauAnn">{this.state.annonce.titre}</span><br/><br/>

							 	{this.state.annonce.description}


						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableauAnn">Categorie</Table.Cell>
						<Table.Cell>{this.state.annonce.categorie}</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableauAnn">Date de début</Table.Cell>
						<Table.Cell>{
							(date.getUTCDate()<10?"0"+date.getUTCDate():date.getUTCDate())+"/"+
							((date.getUTCMonth() + 1)<10?"0"+(date.getUTCMonth() + 1):(date.getUTCMonth() + 1))
							+"/"+date.getUTCFullYear()}</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableauAnn">Date de Fin</Table.Cell>
						<Table.Cell>{this.state.annonce.dateDeFin}</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell className="titreTableauAnn">Statut</Table.Cell>
						<Table.Cell>{this.state.annonce.statut}</Table.Cell>

					</Table.Row>
					<Table.Row className="titreTableau">
						<Table.Cell colSpan='4'>Informations séliste</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell colSpan='4'>
							{this.state.annonce.utilisateur.prenom+" "+this.state.annonce.utilisateur.nom}
						 	<Rating icon='star' disabled rating={this.state.annonce.utilisateur.note} maxRating={4} />
						 </Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell colSpan='4'>{this.state.annonce.utilisateur.username}</Table.Cell>
					</Table.Row>
					<Table.Row className="titreTableau">
						<Table.Cell colSpan='4'>Proposition</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="titreTableauAnn"colSpan='1' >Faire une proposition</Table.Cell>
						<Table.Cell className="titreTableauAnn"colSpan='2'>Commentaire</Table.Cell>
						<Table.Cell className="titreTableauAnn"colSpan='1' rowSpan='2' textAlign='center'>
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
				<Button onClick={this.bouton.bind(this)}>Retour</Button>

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
 		menu:{
			pre:menu.pre,
			actif:menu.actif.get(),
			monCompte:menu.monCompte
		}
 	}

 } ,  AnnonceDes );

