import React, { Component } from 'react'
import ExtraitAnnonce from './ExtraitAnnonce.js'
import Titre1 from './Titre1.js'
import {createContainer} from 'meteor/react-meteor-data';
import {Segment} from 'semantic-ui-react'

import {annonces} from '../../API/annonces.js'
import {propositions} from '../../API/propositions.js'

import {usr} from '../../API/usr.js'
import DepotAnnonce from './DepotAnnonce'

/*Mes Offres et Mes Demandes et Mes Propositions*/

class MesAnnonce extends Component {
	constructor(){
		super()
		this.state={
			prop:"",
			ann:""
		}
	}

	label(ann){
		if(!this.state.prop){
		this.setState({
			prop:this.props.propositions.liste.map((proposition,i)=>{
				if(proposition.annonceId==ann._id){
					return(<ExtraitAnnonce donnees={ann} proposition={proposition}  moi={false} key={i}></ExtraitAnnonce>)
				}
		}),ann:ann._id
		})
		}else{this.setState({prop:"",ann:""})}
	}
	render() {

		if(this.props.type=="proposition"){

			return (
				<div >
					<Titre1 nom={"Mes "+this.props.type+"s"}></Titre1>
					{
						this.props.annonces.liste.map((annonce,i)=>{
							return(
								this.props.propositions.liste.map((proposition,j)=>{
									if(this.props.usr.usrCo._id==proposition.utilisateur._id){
										if(proposition.annonceId==annonce._id){
											return(<ExtraitAnnonce donnees={annonce} proposition={proposition}  moi={true} key={i}></ExtraitAnnonce>)
										}else{return <div></div>}
									}
								})
							)
						})
					}
				</div>
			)
		}else{

			return (
				<div>
					<Titre1 nom={"Mes "+this.props.type+"s"}></Titre1>
					{
						this.props.annonces.liste.map((annonce,i)=>{
							if(this.props.usr.usrCo.username==annonce.utilisateur){
								if(annonce.type==this.props.type){
									var nbProp=0
									this.props.propositions.liste.map((prop,j)=>{
										if(prop.annonceId==annonce._id){
											nbProp++
										}
									})
									return(
											<ExtraitAnnonce donnees={annonce} label={this.label.bind(this)} moi={true} propts={this.state} nbProp={nbProp} key={i}></ExtraitAnnonce>
									)
								}
							}
						})
					}


				</div>

			)
		}
	}
}

export default MesAnnonces = createContainer( ()=>{

 	return{
 		annonces:{
 			liste:annonces.liste.get(),
 			recup1Id:annonces.recup1Id
 		},
 		usr:{usrCo:usr.usrCo.get()},
 		propositions:{liste:propositions.liste.get()}
	}
 } , MesAnnonce );
