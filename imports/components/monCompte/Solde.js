import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'
import ImgSeu from './ImgSeu.js'


export default class Solde extends Component {
	render(){
		return (

			<Segment floated='right'>
				{this.props.solde +" "}<ImgSeu></ImgSeu>
			</Segment>

		);
	}
}

