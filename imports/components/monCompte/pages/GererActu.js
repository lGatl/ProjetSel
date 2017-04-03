import React, {Component} from 'react'
import {markdown} from 'markdown';
import { Dropdown, Button, Form, Input, TextArea,Icon,Segment,Label} from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {articles} from '../../../API/articles.js'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'

import TableauActions from '../TableauActions.js'

class GererAct extends Component {
	constructor(){
		super()
		this.state={
			title:"",
			description:"",
			etat:[],
			html:"",
		}
	}



	miseEnVar(e){
		e.preventDefault();
		this.setState({
			[e.target.name]:e.target.value
		})
		if(e.target.name=='description'){
   	   	this.setState({html: markdown.toHTML(e.target.value)})
    }
	}

	ajoutArticle(e){
		e.preventDefault();

		if(this.state.title && this.state.description){
			this.props.article.ajout(
				{
					title:this.state.title,
					description:this.state.description,
					etat:"Desactiver",
					date:Date.now()

				}
				,(res)=>{

				if(res){
					this.setState({
							title:"",
							description:""
					})
					this.initEtat(res)
				}else{


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

			this.props.article.supprime(aSuppr)
		}

	appliquer(e){
		e.preventDefault()
		var j=0
		var s=""
		var mot=" mis a jour "
		var message= "Vos articles ont été mis a jour"
		this.state.etat.map((et,i)=>{
			var aSauv={}
			if(et=="Supprimer"){
				j++
				this.supprimeArticle(this.props.article.liste[i]._id)
			}else if(et){
				var aSauv=this.props.article.liste[i]
				aSauv.etat=et

				this.props.article.sauve(aSauv)
			}
		})
		if(j>1){
			message= "Vos articles ont été supprimés"
			s="s"
			mot=" supprimés"
		}else if(j==1){
			message= "Votre article a été supprimé"
			mot=" supprimé"
		}
		Bert.alert({
					title:"Article"+s+mot,
					message:message,
					type:'success'
				})

		this.props.article.recup((res)=>{
			if(res){
				this.initEtat(res)
			}else{

			}
		})

}
	initEtat(res){
		var tab=res.map((art)=>art.etat)
		this.setState({etat:tab})
	}

	etatDrop(id,value){
			var tab=this.state.etat
			tab[id]=value
			this.setState({etat:tab})
	}
	componentWillMount(){
		this.props.article.recup((res)=>{
			if(res){
				this.initEtat(res)
			}else{

			}
		})
	}
	tableauActions(){

		if(this.props.article.liste){


			return(
				<TableauActions
					donnees={{
						titres:["Date","Titre"],
						contenu:this.props.article.liste.map((art,i)=>{
							var date = new Date(art.date)
							return(
								{
									tableau:[
										date.getUTCDate()+"/"+(date.getUTCMonth() + 1) +"/"+date.getUTCFullYear(),
										 	<a href={"/articles/"+art.title} className="aSpe">{art.title}</a>
									],
									etat: this.state.etat[i]
								}
							)
						}),

						actions:{
							titre:"Actions",
							contenu:["Publier","Desactiver","Supprimer"]
						}
					}}
					etatDrop={this.etatDrop.bind(this)}

				></TableauActions>
			)
		}
	}

	render(){

		return (


			<div>
				<Titre1 nom="Liste des actualités"></Titre1>

				{this.tableauActions()}

				<Button type='Envoyer' onClick={this.appliquer.bind(this)}>Appliquer</Button>

				<Titre2 nom="Ajouter une nouvelle actualité"></Titre2>
				<Form  onSubmit={this.handleSubmit}>


					<Form.Input className="inputAj"
						label="Titre de l'actualité"
						name='title'
						placeholder='Choisissez un titre'
						value={this.state.title}
						onChange={this.miseEnVar.bind(this)}/>

					<Form.TextArea className="inputAj"
						name='description'
						label="Description de l'actualité"
						value={this.state.description}
						placeholder="Decrire l'article"
						rows='3'
						onChange={this.miseEnVar.bind(this)} />
					<h4>Insérer une piece jointe</h4>
					<br/>
					<Icon size ='huge' name='camera'/>
    					<Icon size ='huge'  name='paste'  />
					<br/>
					<br/>
					<Label>Rendu</Label>
					<Segment dangerouslySetInnerHTML={ {__html: this.state.html} }>
     					 </Segment>
					<Button type='Envoyer' onClick={this.ajoutArticle.bind(this)}>Créer</Button>

				</Form>

			</div>

		);
	}
}
export default GererActu = createContainer( ()=>{

 	return{

		article:{
			liste:articles.liste.get(),
			sauve:articles.sauve,
			ajout:articles.ajout,
			supprime:articles.supprime,
			recup:articles.recup
		}
	 }
 } , GererAct );
