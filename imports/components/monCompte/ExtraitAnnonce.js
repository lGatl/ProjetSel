
import React, { Component } from 'react'

import { Button, Card,Image,Grid,Label,Segment,Confirm,Rating } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../../API/annonces.js'
import {propositions} from '../../API/propositions.js'
import ExtraitProposition from './ExtraitProposition.js'
import {usr} from '../../API/usr.js'
import {menu} from '../../API/menu.js'


class ExtraitAnnonc extends Component {
	constructor(){
		super()
		this.state = {
			open: false,
			edit:false,
			label:true,
			prop: false
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
	 componentDidMount(){
	 		if(this.props.menu.prop.get().indexOf(this.props.donnees._id)>=0){this.setState({prop:true})}
		 }

	label(){

		if(this.state.prop==false&&this.props.nbProp>0){
			this.setState({prop:true})
			var tab=this.props.menu.prop.get()
			if(tab.indexOf(this.props.donnees._id)==0){}else{tab.push(this.props.donnees._id)}
				this.props.menu.prop.set(tab)
		}else{
			this.setState({prop:false})
			var tab=this.props.menu.prop.get()
			if(tab.indexOf(this.props.donnees._id)>=0){
				if(tab.indexOf(this.props.donnees._id,-1)>=0){
					tab.splice((1),1)
				}else(tab.splice((0),1))

			}else{}
				this.props.menu.prop.set(tab)
		}

	}
	propositions(){
		if(this.state.prop==true)
			return(
			<Segment attached='top' style={{marginTop:0,backgroundColor:"rgba(240,40,40,0.3)"}} >
				{
					this.props.propositions.liste.map((proposition,i)=>{
					if(proposition.annonceId==this.props.donnees._id){
						return(<ExtraitProposition donnees={this.props.donnees} proposition={proposition}  moi={false} key={i}></ExtraitProposition>)
				}
			})}</Segment>)
	}

	laDate(){
			var date = new Date(this.props.donnees.date)
		return (
			(date.getUTCDate()<10?" 0"+date.getUTCDate():" "+date.getUTCDate())+"/"+
			((date.getUTCMonth() + 1)<10?"0"+(date.getUTCMonth() + 1):(date.getUTCMonth() + 1))
			+"/"+date.getUTCFullYear()
		)
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
				<br/>
				 <Card fluid style={{marginBottom:0}}>

						<Grid style={{marginBottom:0}}>
							<Grid.Column mobile={7} tablet={6} computer={4}>
								<Image floated='left' size='medium' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
							</Grid.Column>
							<Grid.Column mobile={7} tablet={10} computer={4}>
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
								<Card.Description>
									<span style={{fontWeight:"bold"}}>Date :</span>
									{this.laDate()}
								</Card.Description>
							</Grid.Column>
							<Grid.Column mobile={16} tablet={16} computer={8}  verticalAlign ="bottom" >
								<Label className="labelAn" size="big" onClick={this.label.bind(this)}>{this.props.nbProp}</Label>
									<div className={"ui two buttons"}>
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
								</Grid.Column>
								<Label circular size='massive' color={'yellow'} key={'0'} attached="top right"></Label>
						</Grid>
					</Card>
					{this.state.edit}
					{this.propositions()}
			</div>
		)
	}
}
export default ExtraitAnnonce = createContainer( ()=>{

 	return{

 		annonces:{
 			supprime:annonces.supprime,
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
		menu:{
			prop:menu.prop
		}
 	}

 } ,  ExtraitAnnonc );
