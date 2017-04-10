import React, {Component} from 'react';
import Pages from '../components/Pages.js'
import Titre from '../components/Titre.js'
import EncartActu from '../components/EncartActu.js'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'
import {articles} from '../API/articles.js'

class Actualite extends Component {

componentWillMount(){

	this.props.setActif('Actualites')
}

	render(){


		return (

			<div>

				<Titre nom="ACTUALITÉS"></Titre>

						{this.props.articlesListe.map( (article)=>article.etat=="Publier"?<EncartActu key={article._id} donnees={article} ></EncartActu>:"")}

					<br/>
        				<Pages/>

			</div>
		);
	}
}
 export default Actualites = createContainer( ()=>{

 	return{
 		setActif:menu.setActif,
		articlesListe:articles.rev.get()
 			}

 } , Actualite );
