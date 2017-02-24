import React, {Component} from 'react';
import Pages from '../components/Pages.js'
import Titre from '../components/Titre.js'
import EncartActu from '../components/EncartActu.js'


export default class Actualites extends Component {
	constructor(){
		super()
			this.state={
			articles:[],
			article:{}
		}
		this.nvlArticle={
			title:"",
			description:""
		}
	}



	supprimeArticle(e){

		Meteor.call('supprimArticle', e.target.id ,(err,res)=>{
			if(err){

			}else{
				this.getArticles()

				}
		}
	)
	}
componentWillMount(){
	this.getArticles();
	this.getArticle("je suis  un titre")
}

getArticle(id){
	Meteor.call('etArticle', id ,(err,res)=>{
		if(err){
			Bert.alert({
				title:"erreur",
				message:err.message,
				type:'danger'
			})
		}else{
			this.setState({article: res})
			}
		}
	)
}

getArticles(){
	Meteor.call('listeArticles', (err,res)=>{
		if(err){
			console.log(err )
		}else{
			this.setState({articles  : res})
		}
	})
}



	render(){
		return (

			<div className="">
			<br/>
				<Titre nom="Actualitées"></Titre>
				{this.state.articles.map( (article)=>{return(
					 <EncartActu key={article._id} donnees={article} suppr={this.supprimeArticle.bind(this)}></EncartActu>
				)}
				)}

					<br/>
        				<Pages/>

			</div>
		);
	}
}
