import React, {Component} from 'react';
import { Segment, Header, Image, Grid,Titre } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {articles} from '../API/articles.js'
import {annonces} from '../API/annonces.js'

class DerniereActuAnnonc extends Component {
	rnd(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min +1)) + min;
		}
 render(){
 	var donnees
	this.props.titre=="Annonces"?donnees=this.props.annonces:donnees=this.props.articles
	var compt=0
	return(
			<Segment >
					<Header as='h2' textAlign="center" color='red'>{this.props.titre}</Header>
				<Grid>

					{
						donnees.map((donnee,i)=>{
							if((donnee.etat=="Publier"||donnee.etat=="Valider")&&compt<this.props.nb){
								compt++
								return(

									<Grid.Column width={16}  key={i} textAlign='center' style={{paddingLeft:"20%",paddingRight:"20%",paddingBottom:0}}>

										<Image fluid src={'/images/'+this.rnd(1,16)+'.jpg'} />
										{
											this.props.titre=="Annonces"?
											<a className="aSpe" href={"/annonces/"+donnee.titre}>{donnee.titre}</a>:
											<a className="aSpe" href={"/articles/"+donnee.titre}>{donnee.titre}</a>
										}


									</Grid.Column>
								)
							}
						})
					}
				</Grid>
			</Segment>
		);
	}
}
export default DerniereActuAnnonce = createContainer( ()=>{

 	return{
		articles:articles.rev.get(),
		annonces:annonces.rev.get()
 			}

 } , DerniereActuAnnonc );
