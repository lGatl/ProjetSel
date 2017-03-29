import React, {Component} from 'react';
import FormContact from '../components/FormContact.js';
import CoordonneesHoraires from '../components/CoordonneesHoraires.js';
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

 class Contact extends Component {
	constructor(){
		super()
		this.infos={
			titre:"Coordonnées de la Croix Rouge de Damvillers",
			details:[`6 rue des Remparts`,
						`55150 DAMVILLERS`,
						`Mme CHALUPKA M.L.`,
						`Tél : 09 71 44 27 87`,
						`Mail : mchalupka@wanadoo.fr`]
		}

		this.horaires={
			titre:"Horaires de permanence de la Croix Rouge",
			details:["Mardi de 13h30 à 16h30 et le Vendredi de 10 h à 12h."]
		}
	}
	componentWillMount(){
		this.props.setActif('Contacts')
	}

	render(){
		return (

			<div className="">
			<CoordonneesHoraires contenu={this.infos}></CoordonneesHoraires>
			<CoordonneesHoraires contenu={this.horaires}></CoordonneesHoraires>
				<FormContact></FormContact>

			</div>
		);
	}
}
 export default Contacts = createContainer( ()=>{

 	return{
 		setActif:menu.setActif
 			}

 } , Contact );
