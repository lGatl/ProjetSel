import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'



export default class Titre extends Component {
	render(){
		return (
	<div>
		<Segment textAlign='center' inverted color='orange' compact padded basic>
			<h1>{this.props.nom}</h1>
		</Segment>
	</div>
)
}
}

