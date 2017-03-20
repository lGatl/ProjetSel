import React, {Component} from 'react'

import { Button, Form, Input, TextArea,Icon,Label} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'
import TableauActions from '../TableauActions.js'



export default class Categories extends Component {

	constructor(){
		super()
		this.state={
			boutonSelect:[],
			categorie:"",
			categ:{
				titres:["Categories","Offres","Demandes"],
				contenu:[],
				actions:{titre:"Actions",contenu:["Editer","Desactiver","Supprimer"]}
			},

		}
	}
	componentWillMount(){
		this.listeCategories()
	}
	change(e){
		e.preventDefault()
		this.setState({categorie:e.target.value})

	}

	ajoutCategorie(){
			var obj={"categorie":[this.state.categorie,0,0]}
		Meteor.call('ajoutCategorie',obj,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter cette Categorie" ,
					type:'error'
				})
			}else{
				Bert.alert({
					title:"Categorie ajoutée",
					message:"La Categorie "+this.state.categorie+" a bien été ajoutée",
					type:'success'
				})
			}
		})
		this.setState({categorie:""})
		this.listeCategories()
	}
	listeCategories(){
		Meteor.call('listeCategories',(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de recuperer les Categories" ,
					type:'error'
			})
			}else{
				this.setState({categories:res})
				tab=[]

				res.map((cat)=>{
					tab.push(cat.categorie)
				})

				this.setState({categ:{
					titres:["Categories","Offres","Demandes"],
					contenu:tab,
					actions:{titre:"Actions",contenu:["Editer","Desactiver","Supprimer"]}
				}})
			}
		})

	}

	supprimeCategorie(aSuppr){

		Meteor.call('supprimeCategorie', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer la categorie" ,
					type:'error'
				})
			}else{

			}
		})
	}
	supprime(e){
		e.preventDefault()
		var j=0
		var s=""

		this.state.boutonSelect.map((bt,i)=>{


			if(bt=="Supprimer"){
				j++
				this.supprimeCategorie(this.state.categories[i]._id)

			}

					if(j>1){message= "Vos Categories ont été supprimés";s="s"}else if(j==1){
					message= "Votre Categorie a été supprimé"
					}

					Bert.alert({
						title:"Categorie"+s+" supprimé"+s,
						message:message,
						type:'success'
					})

		})
		this.setState({boutonSelect:[]})
		this.listeCategories()
	}
	etatDrop(tableau){
		this.setState({boutonSelect:tableau})
	}

	render(){
		return (

			<div>
				<Titre1 nom="Creer une Categorie"></Titre1>
					<Input labelPosition='right'
							name="titreDeLaCategorie"
							type='text'
							placeholder='Nom de la Categorie'
							value={this.state.categorie}
							onChange={this.change.bind(this)}
							>
					<Label basic>Nom de la Categorie :  </Label>
					<input />
					<Button type='submit' onClick={this.ajoutCategorie.bind(this)}>Creer</Button>
				</Input>

				<Titre1 nom="Liste des categories"></Titre1>

				<TableauActions donnees={this.state.categ} etatDrop={this.etatDrop.bind(this)}></TableauActions>
				<Button type='Envoyer' onClick={this.supprime.bind(this)}>Appliquer</Button>
			</div>
		);
	}
}
