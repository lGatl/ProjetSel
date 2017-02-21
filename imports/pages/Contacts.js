import React, {Component} from 'react';
import FormContact from '../components/FormContact.js';
import CoordonneesHoraires from '../components/CoordonneesHoraires.js';

export default class Contacts extends Component {
	render(){
		return (

			<div className="">
			<CoordonneesHoraires></CoordonneesHoraires>
			<CoordonneesHoraires></CoordonneesHoraires>
				<FormContact></FormContact>

			</div>
		);
	}
}
