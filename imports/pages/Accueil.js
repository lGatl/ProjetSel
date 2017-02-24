import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'
import { Segment} from 'semantic-ui-react'
import GoogleMap from '../components/GoogleMap.js'



export default class Accueil extends Component {
	render(){
		return (
			<div>
			<br/>
				<Titre nom="Bienvenu Jean-Paul! Partagez bien, services et savoirs... et creez des liens"></Titre>
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
