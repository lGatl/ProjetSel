import React, {Component} from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

export default class EncartActu extends Component {

 render(){

 	return(
		<div>
		    <Container>
		    	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Header as='h2'>Titre</Header>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolore rerum repellat nostrum similique recusandae odio ut aut rem dolorum!</p>
		    </Container>
		</div>
		);
	}
}