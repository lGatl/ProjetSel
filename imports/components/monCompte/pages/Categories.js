import React, {Component} from 'react'

import { Button, Form, Input, TextArea,Icon,Label} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'
import TableauActions from '../TableauActions.js'
import {categories} from '../../../API/categories.js'
import {createContainer} from 'meteor/react-meteor-data';

class Categorie extends Component {

		constructor(){
		super()
		this.state={
			categorie:"",
			etat:[]
		}
	}



	miseEnVar(e){
		e.preventDefault();
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	ajoutCategorie(e){
		e.preventDefault();

		if(this.state.categorie){
			this.props.categorie.ajout(
				{
					categorie:this.state.categorie,
					etat:"Desactiver"
				}
				,(res)=>{

				if(res){
					this.setState({
							categorie:""
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
		supprimeCategorie(aSuppr){

			this.props.categorie.supprime(aSuppr)
		}

	appliquer(e){
		e.preventDefault()
		var j=0
		var s=""
		var mot=" mis a jour "
		var message= "Vos categories ont été mis a jour"
		this.state.etat.map((et,i)=>{
			var aSauv={}
			if(et=="Supprimer"){
				j++
				this.supprimeCategorie(this.props.categorie.liste[i]._id)
			}else if(et){
				var aSauv=this.props.categorie.liste[i]
				aSauv.etat=et

				this.props.categorie.sauve(aSauv)
			}
		})
		if(j>1){
			message= "Vos categories ont été supprimés"
			s="s"
			mot=" supprimés"
		}else if(j==1){
			message= "Votre categorie a été supprimé"
			mot=" supprimé"
		}
		Bert.alert({
					title:"categorie"+s+mot,
					message:message,
					type:'success'
				})

		this.props.categorie.recup((res)=>{
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
		this.props.categorie.recup((res)=>{
			if(res){
				this.initEtat(res)
			}else{

			}
		})
	}
	tableauActions(){

		if(this.props.categorie.liste){

			return(
				<TableauActions
					donnees={{
						titres:["Catégorie","Offre","Demande"],
						contenu:this.props.categorie.liste.map((cat,i)=>{

							return(
								{tableau:[cat.categorie,"0","0"],
								etat: this.state.etat[i]}
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
				<Titre1 nom="Créer une catégorie"></Titre1>
					<Input labelPosition='right'
							name="titreDeLaCategorie"
							type='text'
							placeholder='Nom de la catégorie'
							value={this.state.categorie}
							onChange={this.miseEnVar.bind(this)}
							>
					<Label basic>Nom de la catégorie :  </Label>
					<input />
					<Button type='submit' onClick={this.ajoutCategorie.bind(this)}>Creer</Button>
				</Input>

				<Titre1 nom="Liste des catégories"></Titre1>

				{this.tableauActions()}
				<Button type='Envoyer' onClick={this.appliquer.bind(this)}>Appliquer</Button>
			</div>
		);
	}
}
export default Categories = createContainer( ()=>{

 	return{

		categorie:{
			liste:categories.liste.get(),
			sauve:categories.sauve,
			ajout:categories.ajout,
			supprime:categories.supprime,
			recup:categories.recup
		}
	 }
 } , Categorie );

