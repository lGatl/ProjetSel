
import React, { Component } from 'react'

import { Button, Card,Image,Grid,Label,Segment,Confirm,Rating } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import ImgSeu from './ImgSeu.js'
import {annonces} from '../../API/annonces.js'
import {propositions} from '../../API/propositions.js'
import {usr} from '../../API/usr.js'
import {menu} from '../../API/menu.js'
import {historiques} from '../../API/historiques.js'

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
	rnd(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

	prixEtat(){
		return(
			<div>
				<span  style={{fontWeight:"bold"}}>Prix :</span>
				<span>{" "+this.props.proposition.prix+" "}<ImgSeu /></span><br/>
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

//offre effectue=>proposeur
//demande effectue=>annonceur
	bouton(){
		var nb=""
		var valide=<div></div>
		var refuse=<div></div>
		var supprime=<div></div>

		if(this.props.moi==true){
			if(!(this.props.proposition.etat=="Validé")){
				supprime=<Button name="supprimer" color='red' onClick={this.boutonProp.bind(this)}>Supprimer</Button>
				if(this.props.donnees.type=="offre"){
					valide=<Button name="effectuer" color='blue' onClick={this.boutonProp.bind(this)} >Effectué</Button>
				}
			}
		}else{
			if(this.props.proposition.etat=="En attente"){
				valide=<Button name="valider" color='green' onClick={this.boutonProp.bind(this)} >Valider</Button>
				refuse=<Button name="refuser" color='orange' onClick={this.boutonProp.bind(this)} >Refuser</Button>
			}
			if(this.props.proposition.etat=="Validé"){
				if(this.props.donnees.type=="demande"){
					valide=<Button name="effectuer" color='blue' onClick={this.boutonProp.bind(this)} >Effectué</Button>
				}
			}
		}
		return(
			<div className={'ui three buttons'}  style={{verticalAlign:"bottom"}}>
				{valide}
				{refuse}
				{supprime}
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
					this.props.refuseTout(prop._id)
					var aCh={}
					aCh=this.props.donnees
					aCh.avancement='orange'
					this.props.annonces.sauve(aCh)

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
			this.props.propositions.sauve(prop,(res)=>{
					aCh=this.props.donnees
					aCh.avancement='red'
					this.props.annonces.sauve(aCh)	})
		}

		 this.setState({
			open: false,
			action:"",
			text:"",
			edit:false,
	 	})
	}
	effectue(utAn,utPr,prix,ann){
			if(this.props.donnees.type=="offre"){
			this.props.usr.getUsr(utAn._id,(res)=>{
				if(res){var ut=res
					ut.profile.soldeSeugnette=Number(ut.profile.soldeSeugnette)-Number(prix)
					this.props.usr.changeCompte(ut,()=>{
						this.props.usr.getUsrCo(()=>{})
					})
				}
			})
			this.props.usr.getUsr(utPr._id,(res)=>{
				if(res){var ut=res
					ut.profile.soldeSeugnette=Number(ut.profile.soldeSeugnette)-Number(prix)
					this.props.usr.changeCompte(ut,()=>{})
				}
			})
			this.props.historiques.ajout(
				{
					date:Date.now(),
					debiteur:{username:utAn.username,_id:utAn._id},
					crediteur:{username:utPr.username,_id:utPr._id},
					prix:prix,
					annonce:ann
				},
				()=>{}
			)

			Bert.alert({
				title:"Transaction effectuée",
				message:utPr.username+"=>"+prix+" seugnettes =>"+utAn.username ,

				type:'success'
			})
		}
		if(this.props.donnees.type=="demande"){
			this.props.usr.getUsr(utAn._id,(res)=>{
				if(res){var ut=res
					ut.profile.soldeSeugnette=Number(ut.profile.soldeSeugnette)-Number(prix)
					this.props.usr.changeCompte(ut,()=>{
						this.props.usr.getUsrCo(()=>{})
					})
				}
			})
			this.props.usr.getUsr(utPr._id,(res)=>{
				if(res){var ut2=res
					ut2.profile.soldeSeugnette=Number(ut2.profile.soldeSeugnette)+Number(prix)
					this.props.usr.changeCompte(ut2,()=>{})
				}
			})
			this.props.historiques.ajout(
				{
					date:Date.now(),
					debiteur:{username:utPr.username,_id:utPr._id},
					crediteur:{username:utAn.username,_id:utAn._id},
					prix:prix,
					annonce:ann
				},
				()=>{}
			)

			Bert.alert({
				title:"Transaction effectuée",
				message:utAn.username+"=>"+prix+" seugnettes =>"+utPr.username ,

				type:'success'
			})
		}
		}

	imgUsr(){
		if(this.props.moi==true){
			return(<Image src={'/images/'+this.rnd(1,16)+'.jpg'} style={{height:"200px",width:"200px"}} />)
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
				</a>
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

		return (
			<div>
			{this.br()}
				 <Card fluid style={{marginBottom:0}}>
					<Grid style={{marginBottom:0}}>
						<Grid.Column style={{paddingBottom:0}} mobile={7} tablet={6} computer={4}>
							{this.imgUsr()}
						</Grid.Column>
						<Grid.Column style={{paddingBottom:0}} mobile={7} tablet={10} computer={4}>
							{this.refAnn()}
							<Card.Description>
								<span style={{fontWeight:"bold"}}>Date :</span>
								{this.laDate()}
								{this.prixEtat()}
							</Card.Description>
						</Grid.Column>
							<Confirm
								open={this.state.open}
								content={this.state.text}
								cancelButton='Non'
								confirmButton="OUI"
								onCancel={this.handleCancel}
								onConfirm={this.confirme.bind(this)}
							/>
						<Grid.Column style={{paddingBottom:0}} mobile={16} tablet={16} computer={8}  verticalAlign ="bottom" >
							{this.descLabel()}
							{this.bouton()}

						</Grid.Column>

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
 			sauve:annonces.sauve,
 		},
 		propositions:{
 			supprime:propositions.supprime,
 			sauve:propositions.sauve,
 			liste:propositions.liste.get()
 		},
 		usr:{
			getUsr:usr.getUsr,
			changeCompte:usr.changeCompte,
			getUsrCo:usr.getUsrCo,
			usrCo:usr.usrCo.get()
		},
		historiques:{
			ajout:historiques.ajout
		},
		menu:{
			prop:menu.prop
		}

 	}

 } ,  ExtraitPropositio );
