import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'

import GoogleMap from '../components/GoogleMap.js'
import {createContainer} from 'meteor/react-meteor-data';
import {usr} from '../API/usr.js'
import {menu} from '../API/menu.js'
import {annonces} from '../API/annonces.js'
class Accuei extends Component {

componentWillMount(){
	this.props.setActif('Accueil')
}
	render(){

		return (
			<div>


			<br/>
				<Titre nom={"Bienvenu "+this.props.prenom+"! Partagez bien, services et savoirs... et creez des liens"}></Titre>
				<br/>
					<div >
					<Carousel></Carousel>
					</div>
					<br/>
				<Titre nom="Trouvez un Sel pres de chez vous! C'est simple avec la carte des Selistes"></Titre>
				<br/>

				<GoogleMap></GoogleMap>
			</div>
		);
	}
}

 export default Accueil = createContainer( ()=>{

 	return{
 		prenom:usr.usrCo.get().profile.prenom,
 		setActif:menu.setActif
 			}

 } , Accuei );

