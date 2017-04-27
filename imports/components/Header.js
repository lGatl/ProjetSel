
import React, {Component} from 'react';
import { Header,Image,Segment,Grid } from 'semantic-ui-react'

export default class HeaderS extends Component {

	componentWillMount(){

	}
	render(){

		return (
			<Segment inverted color="red" attached='top' basic style={{border:'none'}} >
				<header>
					<Grid>
						<Grid.Column   verticalAlign='middle' mobile={6} only="mobile"></Grid.Column>
						<Grid.Column  verticalAlign='middle' mobile={4} tablet={2} computer={2}>
							<Image  size='tiny' src='/images/logo-seliste-1.png'/>
						</Grid.Column>
						<Grid.Column   verticalAlign='middle' mobile={6} only="mobile"></Grid.Column>
						<Grid.Column textAlign="center" verticalAlign='middle' mobile={16} tablet={12} computer={12}>
							<h1 > Systeme d'Echange Local </h1>
						</Grid.Column>
						<Grid.Column   verticalAlign='middle' mobile={6} only="mobile"></Grid.Column>
						<Grid.Column  verticalAlign='middle' mobile={4} tablet={2} computer={2}>
							<Image size='tiny' src='/images/croixrouge.png' shape='rounded' />
						</Grid.Column>
						<Grid.Column   verticalAlign='middle' mobile={6} only="mobile"></Grid.Column>
					</Grid>



				</header>
			</Segment>
		);
	}
}
