import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'

import GoogleMap from '../components/GoogleMap.js'



export default class Accueil extends Component {

getuser(){
	console.log('a')
/*	Meteor.call('utilisateur' ,(err,res)=>{
		console.log(err,res)
		if(err){
			console.log("erezrezr")

		}else{
			console.log("eretretreter")
			console.log(res)
			}
		}
	)*/
}
	componentWillMount(){
		this.getuser()
	}

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
