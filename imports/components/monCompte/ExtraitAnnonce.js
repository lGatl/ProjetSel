
import React, { Component } from 'react'

import { Button, Card,Image,Grid,Label,Segment,Confirm,Rating } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../../API/annonces.js'


class ExtraitAnnonc extends Component {
	constructor(){
		super()
		this.state = {
			open: false,
			edit:false,
			label:true

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
	prixEtat(){
		if(this.props.proposition){
			return(
				<div>
					<span  style={{fontWeight:"bold"}}>Prix :</span>
					<span>{" "+this.props.proposition.prix+" seugnettes"}</span><br/>
					<span  style={{fontWeight:"bold"}}>Etat :</span>
					<span>{" "+this.props.proposition.etat}</span>
				</div>
			)
		}
	}
	descLabel(){
		if(this.props.proposition){
				return(
					<div style={{marginRight:"5%"}}>
						<span style={{fontWeight:"bold"}}>Commentaire de la proposition :</span> <br/><br/>
						<span >{this.props.proposition.commentaire}  </span> <br/><br/>
					</div>)

		}else{
			return(<Label className="labelAn" size="big" onClick={this.label.bind(this)}>{this.props.nbProp}</Label>)
		}
	}
	label(e){
		e.preventDefault()
			if(this.props.nbProp){this.props.label(this.props.donnees)}
	}

	bouton(){

		if(this.props.proposition){

			var valide=<div></div>
			var refuse=<div></div>
			var nb=""

			if(this.props.moi==true){
				if(this.props.proposition.etat=="Valide"){
					valide=<Button color='blue' onClick={""} >Effectué</Button>
					nb="two"
				}else{nb="one"}

			}else{
				if(this.props.proposition.etat=="En attente"){
					valide=<Button color='green' onClick={""} >Valider</Button>
					refuse=<Button color='orange' onClick={""} >Refuser</Button>
					nb="three"
				}
				if(this.props.proposition.etat=="Valide"){
					valide=<Button color='blue' onClick={""} >Effectué</Button>
					nb="two"
				}else{nb="one"}
			}


			return(
				<div className={'ui '+"three"+' buttons'}>
					{valide}
					{refuse}

					<Button
						color='red'
						onClick={""}
					>Supprimer</Button>

				</div>
			)
		}else{
			return(
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
						content={'Etes-vous sur de vouloir supprimer cette annonce : '+this.props.donnees.titre+" ?"}
						cancelButton='Non'
										confirmButton="OUI"
						onCancel={this.handleCancel}
						onConfirm={this.handleConfirm}
					/>
				</div>
			)
		}
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

		if(this.props.proposition){
			var date = new Date(this.props.proposition.date)

		}else{
			var date = new Date(this.props.donnees.date)
		}
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
	propts(){

		if(this.props.propts){
			if(this.props.propts.ann==this.props.donnees._id){
			return(
				<Segment style={{backgroundColor:"rgba(240,40,40,0.3)"}} >{this.props.propts.prop.map((pro)=>pro)}</Segment>
			)}

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
			{this.br()}
				 <Card fluid>

						<Grid>
							<Grid.Column mobile={7} tablet={4} computer={4}>
								{this.imgUsr()}
							</Grid.Column>
							<Grid.Column mobile={7} tablet={5} computer={5}>
								{this.refAnn()}
								<Card.Description>
									<span style={{fontWeight:"bold"}}>Date :</span>
									{this.laDate()}
									{this.prixEtat()}
								</Card.Description>

							</Grid.Column>
							<Grid.Column mobile={16} tablet={7} computer={7}  verticalAlign ="bottom" >

										{this.descLabel()}

								<Grid.Column mobile={16} tablet={12} computer={12}>
									<Card.Content extra  >
											{this.bouton()}
										</Card.Content>
									</Grid.Column>
								</Grid.Column>
								<Label circular size='massive' color={'yellow'} key={'0'} attached="top right"></Label>
						</Grid>

					</Card>

					{this.state.edit}
					{this.propts()}
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
