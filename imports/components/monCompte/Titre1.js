import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'



export default class Titre1 extends Component {
	render(){
		return (

			<Segment compact>
				<h2>{this.props.nom}</h2>
			</Segment>

		);
	}
}

