import React, {Component} from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'

export default class DernièreActuAnnonce extends Component {

 render(){

 	return(
		<div>
		    <Segment compact>
		      	<Header as='h2'>Titre</Header>
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		    </Segment>
		</div>
		);
	}
}
