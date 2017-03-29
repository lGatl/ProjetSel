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
				<Titre nom={"Bienvenu "+this.props.prenom+"! Partagez bien, services et savoirs... et creez des liens"}></Titre>
				<br/>
					<div >
						<Grid>
						<Grid.Column width="16">
						<Carousel liste={this.props.liste.slice(0,3)}></Carousel>
						</Grid.Column>
						</Grid>

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
 		setActif:menu.setActif,
 		liste:annonces.liste.get()
 			}

 } , Accuei );

