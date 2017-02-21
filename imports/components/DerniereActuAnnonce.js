import React, {Component} from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

export default class DernièreActuAnnonce extends Component {

 render(){

 	return(
		<div>
		    <Container>
		      	<Header as='h2'>Titre</Header>
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		    </Container>
		</div>
		);
	}
}