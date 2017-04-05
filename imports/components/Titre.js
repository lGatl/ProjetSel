import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'



export default class Titre extends Component {
	render(){
		return (
		<Segment textAlign='center' basic>
			<h1 className='TitrePage'>{this.props.nom}</h1>
		</Segment>
    )
}
}

