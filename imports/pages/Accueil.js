import React, {Component} from 'react'
import Titre from '../components/Titre.js'
import Carousel from '../components/Carousel.js'
import {createContainer} from 'meteor/react-meteor-data';
import GoogleMap from '../components/GoogleMap.js'
import {loggedin,usrCo,getUsrCo} from '../API/API.js'

class Accuei extends Component {

componentWillMount(){
	if(loggedin){getUsrCo()}
}

	render(){

		prenom="Futur Seliste"
		if(this.props.prenom){prenom=this.props.prenom}

		return (
			<div>


			<br/>
				<Titre nom={"Bienvenu "+prenom+"! Partagez bien, services et savoirs... et creez des liens"}></Titre>
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
 	if(usrCo.get().profile){
 		return {prenom:usrCo.get().profile.prenom };
 	}else{return {prenom:"" };}

 } , Accuei );

