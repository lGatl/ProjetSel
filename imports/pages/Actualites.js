import React, {Component} from 'react';
import Pages from '../components/Pages.js'
import Titre from '../components/Titre.js'
import EncartActu from '../components/EncartActu.js'


export default class Actualites extends Component {
	render(){
		return (

			<div className="">
			<br/>
				<Titre nom="Actualitées"></Titre>
					 <EncartActu></EncartActu>
					<br/>
        				<Pages/>

			</div>
		);
	}
}
