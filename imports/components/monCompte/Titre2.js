import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'



export default class Titre2 extends Component {
	render(){
		return (

			<Segment compact>
				<h3>{this.props.nom}</h3>
			</Segment>

		);
	}
}

