import React, {Component} from 'react'

import { Dropdown, Button, Form, Input, TextArea,Icon} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'

import TableauActions from '../TableauActions.js'

export default class GererActu extends Component {
	constructor(){
		super()
			this.state={
			articles:[],
			article:{},
			boutonSelect:[]
		}
		this.nvlArticle={
			title:"",
			description:""
		}

		this.actu={
			titres:["Date","nom"],
			contenu:[],
			actions:["Actions","Editer","Desactiver","Supprimer"]

		}


	}
	etatDrop(tableau){

		this.setState({boutonSelect:tableau})

	}
	remplirTableau(){
		this.actu.contenu=[]
		this.state.articles.map((article)=>{
			this.actu.contenu.push(["12/12/2012",article.title])
		})
	}

	viderInput(){
			this.nvlArticle={
			title:"",
			description:""
		}
			document.getElementsByClassName('inputAj')[0].getElementsByTagName('input')[0].value=""
			document.getElementsByClassName('inputAj')[1].getElementsByTagName('textarea')[0].value=""

	}

	miseEnVarDes(e){
		e.preventDefault();
		this.nvlArticle.description=e.target.value

	}
	miseEnVarTitre(e){
		e.preventDefault();
		this.nvlArticle.title=e.target.value
	}

	ajoutArticle(e){
		e.preventDefault();
		if(this.nvlArticle.titre=="" || this.nvlArticle.description==""){
			console.log("remplir les champs")
		}else{
			Meteor.call('ajoutArticle', this.nvlArticle ,(err,res)=>{
				if(err){
					console.log('aye!')
				}else{
					this.viderInput()
					this.getArticles()
					this.remplirTableau()
				}
			})
		}
	}
		supprimeArticle(aSuppr){

			Meteor.call('supprimArticle', aSuppr ,(err,res)=>{
				if(err){
				}else{

				}
			})
		}
	supprime(e){
		e.preventDefault()
		this.state.boutonSelect.map((bt,i)=>{
			if(bt=="Supprimer"){this.supprimeArticle(this.state.articles[i]._id)}
		})
		this.getArticles()
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
componentWillMount(){
	this.getArticles();
	this.getArticle("je suis  un titre")
}

	render(){
		this.remplirTableau()
		return (


			<div>
				<Titre1 nom="Liste des Articles"></Titre1>

				<TableauActions donnees={this.actu} etatDrop={this.etatDrop.bind(this)}></TableauActions>
				<Button type='Envoyer' onClick={this.supprime.bind(this)}>Appliquer</Button>

				<Titre2 nom="Ajouter un Nouvel Article"></Titre2>
				<Form  onSubmit={this.handleSubmit}>


					<Form.Input className="inputAj"  label="Titre de l'article" name='titreDeLArticle' placeholder='Choisissez un titre'  onChange={this.miseEnVarTitre.bind(this)}/>

					<Form.TextArea className="inputAj"  name='DescriptionDeLArticle' label="description de l'article" placeholder="Decrire l'article" rows='3' onChange={this.miseEnVarDes.bind(this)} />
					<h4>Inserer une piece jointe</h4>
					<br/>
					<Icon size ='huge' name='camera'/>
    					<Icon size ='huge'  name='paste'  />
					<br/>
					<br/>
					<Button type='Envoyer' onClick={this.ajoutArticle.bind(this)}>Creer</Button>

				</Form>
			</div>

		);
	}
}
