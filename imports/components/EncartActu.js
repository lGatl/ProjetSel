import React, {Component} from 'react';
import { Segment, Header, Image,Button,Grid } from 'semantic-ui-react'

export default class EncartActu extends Component {


 render(){
	return(
		<div>

				<Segment >
				<Grid >
					<Grid.Column width={8} style={{padding:0}}>
						<Image floated='left' size='small' src='http://lorempixel.com/50/50' />
					</Grid.Column>
					<Grid.Column width={8}>
						<a href={"/articles/"+this.props.donnees.titre}>
							<Header as='h2'>{this.props.donnees.titre}</Header>
						</a>
						<p>{this.props.donnees.description.slice(0, 30)+" ..."}</p>
					</Grid.Column>
				</Grid>
				</Segment>



				<br/>
		</div>
		);
	}
}
