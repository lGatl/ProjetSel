import React, {Component} from 'react';

import {Segment} from 'semantic-ui-react';

import MenuDeroulant from '../components/MenuDeroulant.js';
import EncartAnnonce from '../components/EncartAnnonce.js';
import Onglets from '../components/Onglets.js'

export default class Annonces extends Component {
	render(){
		return (

			<div className="">
			<h1>Annonces</h1>
			<Segment>
				<MenuDeroulant></MenuDeroulant>
				<MenuDeroulant></MenuDeroulant>
				<MenuDeroulant></MenuDeroulant>
				<MenuDeroulant></MenuDeroulant>
			</Segment>
				<Onglets></Onglets>
				<EncartAnnonce></EncartAnnonce>

			</div>
		);
	}
}
