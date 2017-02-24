import React, {Component} from 'react';
import CarteSeliste from '../components/CarteSeliste.js';
import { Card } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import Titre from '../components/Titre.js'
import Filtres from '../components/Filtres.js'



export default class LesSelistes extends Component {


	render(){
		return (

			<div className="">
				<Titre nom="Les Selistes"></Titre>
					<Filtres></Filtres>
				 <Card.Group>
				 	<CarteSeliste> </CarteSeliste>
				 	<CarteSeliste> </CarteSeliste>
				 	<CarteSeliste> </CarteSeliste>
				 	<CarteSeliste> </CarteSeliste>
				 	<CarteSeliste> </CarteSeliste>
				 	<CarteSeliste> </CarteSeliste>
				 	<CarteSeliste> </CarteSeliste>

				 </Card.Group>


			</div>
		);
	}
}
