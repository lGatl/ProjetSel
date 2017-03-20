import React, {Component} from 'react'

import { Button, Form, Input, TextArea,Icon,Label} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'
import TableauActions from '../TableauActions.js'



export default class Categories extends Component {

	constructor(){
		super()
			this.state={categ:""}
			this.categ={
			titres:["Categories","Offres","Demandes"],
			contenu:[],
			actions:{titre:"Actions",contenu:["Editer","Desactiver"]}
		}
	}
	componentWillMount(){
		this.listeCategories()
	}
	change(e){
		e.preventDefault()
		this.setState({categ:e.target.value})

	}

	ajoutCategorie(){
			var obj={"categorie":[this.state.categ,0,0]}
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
					message:"La Categorie "+this.state.categ+" a bien été ajoutée",
					type:'success'
				})
			}
		})
	}
	listeCategories(){
		Meteor.call('listeCategories',(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de recuperer la liste des Categories" ,
					type:'error'
			})
			}else{
					tab=[]

				res.map((cat)=>{
					tab.push(cat.categorie)
				})

				this.categ.contenu=tab

			}
		})

	}

	render(){
		return (

			<div>
				<Titre1 nom="Creer une Categorie"></Titre1>
					<Input labelPosition='right'
							name="titreDeLaCategorie"
							type='text'
							placeholder='Nom de la Categorie'
							value={this.state.categ}
							onChange={this.change.bind(this)}
							>
					<Label basic>Nom de la Categorie :  </Label>
					<input />
					<Button type='submit' onClick={this.ajoutCategorie.bind(this)}>Creer</Button>
				</Input>

				<Titre1 nom="Liste des categories"></Titre1>

				<TableauActions donnees={this.categ} ></TableauActions>
				<Button type='Envoyer' >Appliquer</Button>
			</div>

		);
	}
}
