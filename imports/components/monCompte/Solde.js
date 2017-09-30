import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'
import ImgSeu from './ImgSeu.js'


export default class Solde extends Component {
	render(){
		return (

			<Segment floated='right'>
				{"Solde "+": "+this.props.solde }<ImgSeu></ImgSeu>
			</Segment>

		);
	}
}

