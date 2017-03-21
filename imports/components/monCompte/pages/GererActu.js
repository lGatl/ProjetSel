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
			boutonSelect:[],
			title:"",
			description:"",
			etat:"Editer"
		}

		this.actu={
			titres:["Date","nom"],
			contenu:[],
			actions:{titre:"Actions",contenu:["Editer","Desactiver","Supprimer"]}
		}
	}
	videState(){
			this.setState({
			articles:[],
			article:{},
			boutonSelect:[],
			title:"",
			description:"",
			etat:"Editer"
		})
	}

	etatDrop(tableau){

		this.setState({boutonSelect:tableau})


	}
	remplirTableau(){
		this.actu.contenu=[]
		this.state.articles.map((article)=>{
			this.actu.contenu.push({tableau:["12/12/2012",article.title],etat:article.etat})
		})
	}

	viderInput(){
		this.setState({
			title:"",
			description:""
		})
	}

	miseEnVar(e){
		e.preventDefault();
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	ajoutArticle(e){
		e.preventDefault();

		if(this.state.title && this.state.description){

			Meteor.call('ajoutArticle', this.state ,(err,res)=>{
				if(err||res==false){
					Bert.alert({
						title:"Erreur",
						message:"Impossible d'ajouter l'article" ,
						type:'error'
					})
				}else{
					this.viderInput()
					this.getArticles()
					this.remplirTableau()

					Bert.alert({
						title:"Article sauvegardé",
						message:"Votre article "+this.state.title+" a été sauvegardé" ,
						type:'success'
					})
				}
			})
		}else{
					Bert.alert({
						title:"Donnée manquantes",
						message:"Veuillez remplir les champs" ,
						type:'info'
					})
			}
	}
		supprimeArticle(aSuppr){

			Meteor.call('supprimArticle', aSuppr ,(err,res)=>{
				if(err){
					Bert.alert({
						title:"Erreur",
						message:"Impossible de supprimer l'atricle" ,
						type:'error'
					})
				}else{

				}
			})
		}
	sauveModifEtat(){

		this.state.boutonSelect.map((et,i)=>{
			var aSauv={}
			if(et){
				var aSauv=this.state.articles[i]
				aSauv.etat=et

				Meteor.call('sauvegardeArticles',aSauv,(err,res)=>{
					console.log("rtretree")
				})
			}
		})
	}
	appliquer(e){
		e.preventDefault()
		var j=0
		var s=""
		this.sauveModifEtat()

		this.state.boutonSelect.map((bt,i)=>{

			if(bt=="Supprimer"){
				j++
				this.supprimeArticle(this.state.articles[i]._id)
				if(j>1){message= "Vos articles ont été supprimés";s="s"}else if(j==1){
					message= "Votre article a été supprimé"
					}

				Bert.alert({
					title:"Article"+s+" supprimé"+s,
					message:message,
					type:'success'
				})
			}

		})
		this.videState()
		this.getArticles()
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

}

	render(){
		this.remplirTableau()
		return (


			<div>
				<Titre1 nom="Liste des Articles"></Titre1>

				<TableauActions donnees={this.actu} etatDrop={this.etatDrop.bind(this)}></TableauActions>

				<Button type='Envoyer' onClick={this.appliquer.bind(this)}>Appliquer</Button>

				<Titre2 nom="Ajouter un Nouvel Article"></Titre2>
				<Form  onSubmit={this.handleSubmit}>


					<Form.Input className="inputAj"
						label="Titre de l'article"
						name='title'
						placeholder='Choisissez un titre'
						value={this.state.title}
						onChange={this.miseEnVar.bind(this)}/>

					<Form.TextArea className="inputAj"
						name='description'
						label="Description de l'article"
						value={this.state.description}
						placeholder="Decrire l'article"
						rows='3'
						onChange={this.miseEnVar.bind(this)} />
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
