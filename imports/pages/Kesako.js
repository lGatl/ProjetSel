import React, {Component} from 'react';
import ContenuKesako from '../components/ContenuKesako.js'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

class Kesak extends Component {
	componentWillMount(){
		this.props.setActif('Kesako')
	}
	render(){
		return (

			<div className="">
				<ContenuKesako></ContenuKesako>

			</div>
		);
	}
}

 export default Kesako = createContainer( ()=>{

 	return{
 		setActif:menu.setActif
 			}

 } , Kesak );
