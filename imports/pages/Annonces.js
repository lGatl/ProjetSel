import React, {Component} from 'react';

import {Segment} from 'semantic-ui-react';

import EncartAnnonce from '../components/EncartAnnonce.js';
import Onglets from '../components/Onglets.js'
import Filtres from '../components/Filtres.js'



export default class Annonces extends Component {

	render(){
		return (

			<div className="">
			<br/>

			<Segment>
			<Filtres></Filtres>
			</Segment>
				<Onglets></Onglets>
				<EncartAnnonce></EncartAnnonce>

			</div>
		);
	}
}
