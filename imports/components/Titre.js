import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'



export default class Titre extends Component {
	render(){
		return (
	<div>
		<Segment textAlign='center' compact padded basic>
			<h1 className='TitrePage'>{this.props.nom}</h1>
		</Segment>
	</div>
    )
}
}

