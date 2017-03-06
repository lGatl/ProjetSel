import React, {Component} from 'react';
import { Segment, Header, Image,Button } from 'semantic-ui-react'

export default class EncartActu extends Component {


 render(){
 		article=this.props.donnees


 	return(
		<div>
		    <Segment compact>
		    	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Header as='h2'>{article.title}</Header>
		      	<p>{article.description}</p>

		    </Segment>
		</div>
		);
	}
}
