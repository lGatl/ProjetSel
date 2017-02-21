import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'

export default class Map extends Component {

	render(){
		return(
			<div>
				<Segment>
					<h3>Description de la carte !</h3>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117645.10670456768!2d5.437583378923197!3d49.340523526598865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eae43ce6bc4a89%3A0x40a5fb99a3ae190!2s55150+Damvillers!5e0!3m2!1sfr!2sfr!4v1487668147876" width="800" height="800" frameBorder="0" allowFullScreen></iframe>
					// A rajouter du CSS pour gérer taille de la map
				</Segment>
			</div>
		)
	}
}
