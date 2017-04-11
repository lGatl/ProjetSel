import React, {Component} from 'react';
import { Segment, Header, Image,Button } from 'semantic-ui-react'

export default class EncartActu extends Component {


 render(){
 	return(
		<div>
		    <Segment compact>
		    	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<a href={"/articles/"+this.props.donnees.titre}>
		      		<Header as='h2'>{this.props.donnees.titre}</Header>
		      	</a>
		      	<p>{this.props.donnees.description.slice(0, 30)+" ..."}</p>

		    </Segment>
		</div>
		);
	}
}
