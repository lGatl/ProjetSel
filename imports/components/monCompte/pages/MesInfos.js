import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Lister from '../Lister.js'



export default class MesInfos extends Component {
	render(){
		return (


			<div>
				<Titre1 nom="Mes Informations"></Titre1>
				<Lister></Lister>
				<Titre1 nom="Mes Seugnettes"></Titre1>
				<Lister></Lister>
			</div>

		);
	}
}



