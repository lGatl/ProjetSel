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
	render(){

		return (
			<div>


			<br/>
				<Titre nom={"Bienvenue "+this.props.prenom+ "!" } ></Titre>
				<Titre nom={"Partagez des services et des savoirs... Créez des liens"}></Titre>
				<hr />
				<br/>
						<Carousel liste={this.props.liste.slice(0,3)}></Carousel>
					<br/>
				<Titre nom="Trouvez un SEL près de chez vous ! C'est simple avec la carte des sélistes"></Titre>
				<hr/>
				<br/>

				<GoogleMap></GoogleMap>
			</div>
		);
	}
}

 export default Accueil = createContainer( ()=>{

 	return{
 		prenom:usr.usrCo.get().profile.prenom,
 		setActif:menu.setActif,
 		liste:annonces.liste.get()
 			}

 } , Accuei );

