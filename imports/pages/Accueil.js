import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'

import GoogleMap from '../components/GoogleMap.js'



export default class Accueil extends Component {
constructor(){
	super()
	this.state={mail:{}}
}
getuser(){

	Meteor.call('utilisateurs' ,(err,res)=>{

		if(err){
			console.log("erezrezr")

		}else{

			this.setState({mail  : res})

			}
		}
	)
}
	componentWillMount(){
		this.getuser()

	}

	render(){
		var nom="Futur Seliste"
		console.log("this.state.mail", this.state.mail);
		if(this.state.mail.emails){
			nom=this.state.mail.emails[0].address
			nom=nom.slice(0, nom.indexOf("@",0))
		}
		return (
			<div>
			<br/>
				<Titre nom={"Bienvenu "+nom+"! Partagez bien, services et savoirs... et creez des liens"}></Titre>

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
