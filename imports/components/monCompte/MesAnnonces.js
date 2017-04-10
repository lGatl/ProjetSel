import React, { Component } from 'react'
import ExtraitAnnonce from './ExtraitAnnonce.js'
import Titre1 from './Titre1.js'
import {createContainer} from 'meteor/react-meteor-data';

import {annonces} from '../../API/annonces.js'
import {usr} from '../../API/usr.js'
import DepotAnnonce from './DepotAnnonce'

/*Mes Offres et Mes Demandes et Mes Propositions*/

class MesAnnonce extends Component {


	render() {

		return (
			<div>
				<Titre1 nom={"Mes "+this.props.type+"s"}></Titre1>
				{
					this.props.liste.map((annonce,i)=>{
						if(this.props.usrCo.username==annonce.utilisateur){
							if(annonce.type==this.props.type){
								return(<ExtraitAnnonce donnees={annonce} editer={""} key={i}></ExtraitAnnonce>)
							}
						}
					})
				}

			</div>
		)
	}
}

export default MesAnnonces = createContainer( ()=>{

 	return{
 		liste:annonces.liste.get(),
 		usrCo:usr.usrCo.get()
	}
 } , MesAnnonce );
