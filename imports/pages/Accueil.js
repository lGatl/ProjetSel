import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'

import GoogleMap from '../components/GoogleMap.js'
import {createContainer} from 'meteor/react-meteor-data';
import {usr} from '../API/usr.js'
import {menu} from '../API/menu.js'
import {annonces} from '../API/annonces.js'
import { Grid } from 'semantic-ui-react'


class Accuei extends Component {

componentWillMount(){
	this.props.setActif('Accueil')
}
carousel(){
	var donnees=[]
	var compt = 0
	this.props.rev.map((donnee,i)=>{
		if((donnee.etat=="Valider")&&compt<3){
			compt++
			donnees.push(donnee)

		}
	})
	return(
		<Carousel liste={donnees}></Carousel>
	)
}
	render(){

		return (
			<div>

				<Titre nom={["BIENVENUE "+this.props.prenom.toUpperCase()+ "! "," Partagez des services et des savoirs... Créez des liens"]} ></Titre>
					{this.carousel()}
					<br/>
				<Titre nom="Trouvez un SEL près de chez vous ! C'est simple avec la carte des sélistes"></Titre>

				<GoogleMap></GoogleMap>
			</div>
		);
	}
}

 export default Accueil = createContainer( ()=>{

 	return{
 		prenom:usr.usrCo.get().profile.prenom,
 		setActif:menu.setActif,
 		rev:annonces.rev.get()
 			}

 } , Accuei );

