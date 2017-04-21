
import React, { Component } from 'react'

import { Button, Card,Image,Grid,Label,Segment,Confirm,Rating } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../../API/annonces.js'
import {propositions} from '../../API/propositions.js'

class ExtraitPropositio extends Component {
	constructor(){
		super()
		this.state = {
			open: false,
			action:"",
			text:"",
			edit:false,
			label:true


		 }

		this.boutonProp = (e) => {
			e.preventDefault()
			if(e.target.name=="valider"){var text="Voulez-vous vraiment valider cette proposition?"}
			if(e.target.name=="effectuer"){var text="Voulez-vous vraiment confirmer que le travail à été effectué"}
			if(e.target.name=="refuser"){var text="Voulez-vous vraiment refuser cette proposition?"}
			if(e.target.name=="supprimer"){var text="Voulez-vous vraiment supprimer cette proposition?"}
			this.setState({
				open:true,
				action:e.target.name,
				text:text,
				edit:false,
		 	})
		}

		this.handleCancel = () =>{ this.setState({
				open: false,
				action:"",
				text:"",
				edit:false,
		 	})}
	}

	prixEtat(){
		return(
			<div>
				<span  style={{fontWeight:"bold"}}>Prix :</span>
				<span>{" "+this.props.proposition.prix+" seugnettes"}</span><br/>
				<span  style={{fontWeight:"bold"}}>Etat :</span>
				<span>{" "+this.props.proposition.etat}</span>
			</div>
		)

	}
	descLabel(){

		return(
			<div style={{marginRight:"15%"}}>
				<span style={{fontWeight:"bold"}}>Commentaire de la proposition :</span> <br/><br/>
				<span >{this.props.proposition.commentaire}  </span> <br/><br/>
			</div>
		)
	}


	bouton(){
		var nb=""
		var valide=<div></div>
		var refuse=<div></div>

		if(this.props.moi==true){
			if(this.props.proposition.etat=="Valide"){
				valide=<Button name="effectuer" color='blue' onClick={this.boutonProp.bind(this)} >Effectué</Button>
			}
		}else{
			if(this.props.proposition.etat=="En attente"){
				valide=<Button name="valider" color='green' onClick={this.boutonProp.bind(this)} >Valider</Button>
				refuse=<Button name="refuser" color='orange' onClick={this.boutonProp.bind(this)} >Refuser</Button>
			}
			if(this.props.proposition.etat=="Validé"){
				valide=<Button name="effectuer" color='blue' onClick={this.boutonProp.bind(this)} >Effectué</Button>
			}
		}
		return(
			<div className={'ui three buttons'}>
				{valide}
				{refuse}
				<Button
					name="supprimer"
					color='red'
					onClick={this.boutonProp.bind(this)}
				>Supprimer</Button>
			</div>
		)
	}
	confirme(){
		if(this.state.action=="supprimer"){
			this.props.propositions.supprime(this.props.proposition._id,()=>{})
		}else if(this.state.action=="valider") {
			prop=this.props.proposition
			prop.etat=("Validé")
			this.props.propositions.sauve(prop,(res)=>{
				if(res){
					Bert.alert({
						title:"Proposition validée",
						message:"Cette proposition a été validée" ,
						type:'success'
					})
				}
			})
		}else if(this.state.action=="refuser") {
			prop=this.props.proposition
			prop.etat=("Refuse")
			this.props.propositions.sauve(prop,(res)=>{
				if(res){
					Bert.alert({
						title:"Proposition refusée",
						message:"Cette proposition a été refusée" ,
						type:'success'
					})
				}
			})
		}else if(this.state.action=="effectuer") {
			prop=this.props.proposition
			prop.etat=("Effectué")
			this.props.propositions.sauve(prop,(res)=>{	})


			this.effectue(this.props.donnees.utilisateur,prop.utilisateur,prop.prix,{_id:this.props.donnees._id,titre:this.props.donnees.titre,categorie:this.props.donnees.categorie})
		}

		 this.setState({
			open: false,
			action:"",
			text:"",
			edit:false,
	 	})
	}
	effectue(utAn,utPr,prix,ann){
			this.props.effectue(utAn,utPr,prix,ann)
		}

	imgUsr(){
		if(this.props.moi==true){
			return(<Image floated='left' size='medium' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />)
		}else{
			if(this.props.proposition){
				const proposition=this.props.proposition
				return(
					<div>
						<span  style={{fontWeight:"bold"}}>Proposition de :</span><br/>
							{proposition.utilisateur.username} <br/>
							<Rating icon='star' disabled rating={proposition.utilisateur.note} maxRating={4} />
					</div>
				)
			}
		}
	}
	br(){
		if(this.props.moi==true){
			return(<br/>)
		}
	}
	laDate(){

			var date = new Date(this.props.proposition.date)
		return (
			(date.getUTCDate()<10?" 0"+date.getUTCDate():" "+date.getUTCDate())+"/"+
			((date.getUTCMonth() + 1)<10?"0"+(date.getUTCMonth() + 1):(date.getUTCMonth() + 1))
			+"/"+date.getUTCFullYear()
		)
	}
	refAnn(){

		if(this.props.moi==true){
			return(
				<div>
			<Card.Header>
				<a href={"/annonces/"+this.props.donnees.titre} className="aSpe">
						{this.props.donnees.titre}
				</a> <span style={{color:etat.couleur,fontWeight:"bold"}}>{etat.etat}</span><br/><span style={{fontWeight:"bold"}}>Type :</span>{" "+this.props.donnees.type}
			</Card.Header>
			<br/>
			<Card.Meta>{this.props.donnees.description.slice(0, 30)+" ..."}
			</Card.Meta>
			</div>
			)
		}
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

	render() {
		etat={}
			this.props.donnees.etat=="En Attente"?etat={etat:"En Attente",couleur:"blue"}:
			this.props.donnees.etat=="Valider"?etat={etat:"Valide",couleur:"green"}:
			this.props.donnees.etat=="Refuser"?etat={etat:"Refusée",couleur:"red"}:etat={}
		return (
			<div>
			{this.br()}
				 <Card fluid style={{marginBottom:0}}>
					<Grid style={{marginBottom:0}}>
						<Grid.Column mobile={7} tablet={6} computer={4}>
							{this.imgUsr()}
						</Grid.Column>
						<Grid.Column mobile={7} tablet={10} computer={4}>
							{this.refAnn()}
							<Card.Description>
								<span style={{fontWeight:"bold"}}>Date :</span>
								{this.laDate()}
								{this.prixEtat()}
							</Card.Description>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={16} computer={8}  verticalAlign ="bottom" >
							{this.descLabel()}
							{this.bouton()}
							<Confirm
								open={this.state.open}
								content={this.state.text}
								cancelButton='Non'
								confirmButton="OUI"
								onCancel={this.handleCancel}
								onConfirm={this.confirme.bind(this)}
							/>
						</Grid.Column>
						<Label circular size='massive' color={'yellow'} key={'0'} attached="top right"></Label>
					</Grid>
				</Card>
				{this.state.edit}
			</div>
		)
	}
}
export default ExtraitProposition = createContainer( ()=>{

 	return{
 		annonces:{
 			supprime:annonces.supprime,
 		},
 		propositions:{
 			supprime:propositions.supprime,
 			sauve:propositions.sauve,
 			liste:propositions.liste.get()
 		}

 	}

 } ,  ExtraitPropositio );
