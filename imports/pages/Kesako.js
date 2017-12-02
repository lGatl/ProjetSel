import React, {Component} from 'react';
import ContenuKesako from '../components/ContenuKesako.js'
import {createContainer} from 'meteor/react-meteor-data';

class Kesako extends Component {
	componentWillMount(){
	}
	render(){
		return (

			<div className="">
				<ContenuKesako></ContenuKesako>

			</div>
		);
	}
}
