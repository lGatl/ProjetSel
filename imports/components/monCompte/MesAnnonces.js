import React, { Component } from 'react'
import ExtraitAnnonce from './ExtraitAnnonce.js'
import ExtraitProposition from './ExtraitProposition.js'
import Titre1 from './Titre1.js'
import {createContainer} from 'meteor/react-meteor-data';
import {Segment} from 'semantic-ui-react'

import {annonces} from '../../API/annonces.js'
import {propositions} from '../../API/propositions.js'

import {usr} from '../../API/usr.js'
import {menu} from '../../API/menu.js'
import DepotAnnonce from './DepotAnnonce'


/*Mes Offres et Mes Demandes et Mes Propositions*/

class MesAnnonce extends Component {




	render() {
		var utilisat=this.props.usr.usrCo
		if(this.props.type=="proposition"){

			return (
				<div >
					<Titre1 nom={"Mes "+this.props.type+"s"}></Titre1>
					{
						this.props.annonces.liste.map((annonce,i)=>{
							return(
								this.props.propositions.liste.map((proposition,j)=>{
									if(utilisat._id==proposition.utilisateur._id){
										if(proposition.annonceId==annonce._id){
											return(<ExtraitProposition donnees={annonce} proposition={proposition} moi={true} key={i+" "+j}></ExtraitProposition>)
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
							if(utilisat._id==annonce.utilisateur._id){
								if(annonce.type==this.props.type){
									var nbProp=0
									this.props.propositions.liste.map((prop,j)=>{
										if(prop.annonceId==annonce._id&&!(prop.etat=="Refuse")){

											nbProp++
										}
									})
									return(
										<ExtraitAnnonce donnees={annonce} moi={true}  nbProp={nbProp} key={i}></ExtraitAnnonce>
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
 		usr:{usrCo:usr.usrCo.get(),
 			getUsrCo:usr.getUsrCo},
 		propositions:{liste:propositions.liste.get()},

		menu:{
			prop:menu.prop
		}
	}
 } , MesAnnonce );
