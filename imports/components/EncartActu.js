import React, {Component} from 'react';
import { Segment, Header, Image,Button,Grid } from 'semantic-ui-react'
import {markdown} from 'markdown';

export default class EncartActu extends Component {

	rnd(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

 render(){
	return(
		<div>

				<Segment >
				<Grid >
					<Grid.Column width={8} style={{padding:0}}>
						<Image src={'/images/'+this.rnd(1,16)+'.jpg'} style={{height:"120px",width:"120px"}} />
					</Grid.Column>
					<Grid.Column width={8}>
						<a href={"/articles/"+this.props.donnees.titre}>
							<Header as='h2'>{this.props.donnees.titre}</Header>
						</a>

						<Segment basic dangerouslySetInnerHTML={ {__html:markdown.toHTML(this.props.donnees.description.slice(0, 30)+" ...")} }/>
					</Grid.Column>
				</Grid>
				</Segment>



				<br/>
		</div>
		);
	}
}
