import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'
import ImgSeu from './ImgSeu.js'


export default class Solde extends Component {
	render(){
		return (

			<Segment floated='right'>
<<<<<<< HEAD
				{"Solde "+": "+this.props.solde }<ImgSeu></ImgSeu>
=======
				{this.props.solde +" "}<ImgSeu></ImgSeu>
>>>>>>> parent of 82bff76... carte google js + marqueur
			</Segment>

		);
	}
}

