import React, {Component} from 'react';
import { Segment, Header, Image, Grid } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {articles} from '../API/articles.js'
import {annonces} from '../API/annonces.js'

class DerniereActuAnnonc extends Component {

 render(){
 	var donnees
	this.props.titre=="Annonces"?donnees=this.props.annonces:donnees=this.props.articles
	return(
			<Segment >
					<Header as='h2' textAlign="center">{this.props.titre}</Header>
				<Grid>

					{
						donnees.map((donnee,i)=>(
							<Grid.Row key={i}>
								<Image src='/images/faitesundon.png' size='mini' wrapped />
								{
									this.props.titre=="Annonces"?
									<a className="aSpe" href={"/annonces/"+donnee.titre}>{donnee.titre}</a>:
									<a className="aSpe" href={"/articles/"+donnee.titre}>{donnee.titre}</a>
								}
							</Grid.Row>

						))
					}
				</Grid>
			</Segment>
		);
	}
}
export default DerniereActuAnnonce = createContainer( ()=>{

 	return{
		articles:articles.rev.get().slice(0,4),
		annonces:annonces.rev.get().slice(0,4)
 			}

 } , DerniereActuAnnonc );
