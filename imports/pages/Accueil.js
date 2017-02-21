import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'
import { Segment} from 'semantic-ui-react'
import GoogleMap from '../components/GoogleMap.js'



export default class Accueil extends Component {
	render(){
		return (
			<div>
				<Titre></Titre>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>

					<div >
					<Carousel></Carousel>
					</div>

				<Titre></Titre>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<GoogleMap></GoogleMap>
			</div>
		);
	}
}
