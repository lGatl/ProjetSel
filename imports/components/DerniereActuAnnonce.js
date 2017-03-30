import React, {Component} from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'

export default class DerniereActuAnnonce extends Component {

 render(){

 	return(
		<div>
		    <Segment >
		      	<Header as='h2' textAlign="center">{this.props.titre}</Header>
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		    </Segment>
		</div>
		);
	}
}
