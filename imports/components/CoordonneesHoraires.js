import React, {Component} from 'react';
import { Segment, Header } from 'semantic-ui-react'

export default class CoordonneesHoraires extends Component {



	render(){

		return(
			<div>
			    <Segment textAlign="center" >
			    	<Header as='h2'>{this.props.contenu.titre}</Header>
			    	<p >
				{this.props.contenu.details.map((detail,i) => <span key={detail,i}>{detail} <br/></span>)}
				</p>
			    </Segment>
			</div>
		);
	}
}
