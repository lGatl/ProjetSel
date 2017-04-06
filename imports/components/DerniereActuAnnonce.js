import React, {Component} from 'react';
import { Segment, Header, Image, Grid } from 'semantic-ui-react'

export default class DerniereActuAnnonce extends Component {

 render(){

	return(
			<Segment >
					<Header as='h2' textAlign="center">{this.props.titre}</Header>
				<Grid>
					<Grid.Row>
						<Image src='/images/faitesundon.png' size='mini' wrapped />
					</Grid.Row>
					<Grid.Row>
						<Image src='/images/faitesundon.png' size='mini' wrapped />
					</Grid.Row>
					<Grid.Row>
						<Image src='/images/faitesundon.png' size='mini' wrapped />
					</Grid.Row>
					<Grid.Row>
						<Image src='/images/faitesundon.png' size='mini' wrapped />
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}
