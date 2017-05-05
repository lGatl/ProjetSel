import React, {Component} from 'react';
import Pages from '../components/Pages.js'
import Titre from '../components/Titre.js'
import EncartActu from '../components/EncartActu.js'
import {createContainer} from 'meteor/react-meteor-data';
import {articles} from '../API/articles.js'
import { Grid } from 'semantic-ui-react'

class Actualite extends Component {

	render(){


		return (
			<div>
				<Titre nom="ACTUALITÉS"></Titre>
				<Grid>
					<Grid.Column mobile={16} tablet={16} computer={3} only="computer"></Grid.Column>
					<Grid.Column mobile={16} tablet={16} computer={10}>

								{this.props.articlesListe.map((article)=>article.etat=="Publier"?<EncartActu key={article._id} donnees={article} ></EncartActu>:"")}

							<br/>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={16} computer={3} only="computer"></Grid.Column>
				</Grid>
			</div>
		);
	}
}
 export default Actualites = createContainer( ()=>{

 	return{
		articlesListe:articles.rev.get()
 			}

 } , Actualite );
