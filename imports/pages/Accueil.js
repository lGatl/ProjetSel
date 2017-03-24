import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'

import GoogleMap from '../components/GoogleMap.js'



export default class Accueil extends Component {

constructor(){
	super()
	this.state={nom:"Futur Seliste"}
}
utConnecte(){

	Meteor.call('utilisateur' ,(err,res)=>{

		if(err){
			console.log("err")
		}else{
				this.setState({nom : res.profile.prenom})
			}
		}
	)
}
	componentWillMount(){
		this.utConnecte()

	}

	render(){



		return (
			<div>
			<br/>
				<Titre nom={"Bienvenu "+this.state.nom+"! Partagez bien, services et savoirs... et creez des liens"}></Titre>

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
