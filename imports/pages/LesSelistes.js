import React, {Component} from 'react';
import CarteSeliste from '../components/CarteSeliste.js';
import { Card } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import MenuDeroulant from '../components/MenuDeroulant.js';

export default class LesSelistes extends Component {
	render(){
		return (

			<div className="">
				<h1>Les Selistes</h1>
				<Segment>
					<MenuDeroulant></MenuDeroulant>
					<MenuDeroulant></MenuDeroulant>
					<MenuDeroulant></MenuDeroulant>
				</Segment>
				 <Card.Group>
				 	<CarteSeliste></CarteSeliste>
				 	<CarteSeliste></CarteSeliste>
				 	<CarteSeliste></CarteSeliste>
				 	<CarteSeliste></CarteSeliste>
				 	<CarteSeliste></CarteSeliste>
				 	<CarteSeliste></CarteSeliste>
				 	<CarteSeliste></CarteSeliste>
				 </Card.Group>

			</div>
		);
	}
}
