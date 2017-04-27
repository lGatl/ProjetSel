import React, {Component} from 'react';
import { Segment, Header, Image,Button,Grid } from 'semantic-ui-react'

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
						<Image src={'/images/'+this.rnd(1,16)+'.jpg'} style={{height:"100px",width:"100px"}} />
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
