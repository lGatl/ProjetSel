import React, {Component} from 'react';
import { Segment, Header, Image,Button } from 'semantic-ui-react'

export default class EncartActu extends Component {


 render(){
 		article=this.props.donnees
 		suppr=this.props.suppr

 	return(
		<div>
		    <Segment compact>
		    	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Header as='h2'>{article.title}</Header>
		      	<p>{article.description}</p>
		      	<Button type='Envoyer' id={article._id} onClick={suppr}>Supprimer</Button>
		    </Segment>
		</div>
		);
	}
}
