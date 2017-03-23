import React, {Component} from 'react'
import { Button} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import MenuDeroulant from '../../MenuDeroulant.js';
import TableauActions from '../TableauActions.js'

export default class GererAnnonces extends Component {
	constructor(){
		super()
		this.state={
			annonces:[],
			boutonSelect:[],
			title:"",
			description:""
		}
			this.categories={titre:"Categories :",contenu:["Cuisine","Mecanique"]}
			this.etat={titre:"Etat",contenu:["Valider","En Attente","Refuser"]}
			this.type={titre:"Type",contenu:["Offre","Demande"]}

		this.annonces={
			titres:["Dates","Nom Prenom","Types","Categorie","Titre de l'Annonce"],
			contenu:[],
			actions:{titre:"Actions",contenu:["Valider","En Attente","Refuser","Supprimer"]}
		}
	}
	videState(){
		this.setState({
			annonces:[],
			boutonSelect:[],
			title:"",
			description:""
		})
	}
	etatDrop(tableau){

		this.setState({boutonSelect:tableau})
	}
	remplirTableau(){

		this.annonces.contenu=[]
		this.state.annonces.map((annonce)=>{
			this.annonces.contenu.push({
				tableau:["12/12/2012","Jean Bon",annonce.type,annonce.categorie,annonce.titreDeLAnnonce],
				etat: annonce.etat
			})

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

		supprimeAnnonce(aSuppr){
			Meteor.call('supprimeAnnonce', aSuppr ,(err,res)=>{
				if(err){
					Bert.alert({
						title:"Erreur",
						message:"Impossible de supprimer l'annonce" ,
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
				var aSauv=this.state.annonces[i]
				aSauv.etat=et

				Meteor.call('sauvegardeAnnonces',aSauv,(err,res)=>{
				})
			}
		})
	}
	appliquer(e){
		e.preventDefault()
		this.sauveModifEtat()
		var j=0
		var s=""
		this.state.boutonSelect.map((bt,i)=>{

			if(bt=="Supprimer"){
				j++
				this.supprimeAnnonce(this.state.annonces[i]._id)
				if(j>1){message= "Vos Annonces ont été supprimés";s="s"}else if(j==1){
					message= "Votre Annonce a été supprimé"
					}

					Bert.alert({
						title:"Annonce"+s+" supprimé"+s,
						message:message,
						type:'success'
					})
			}



		})
		this.videState()
		this.getAnnonces()
	}

	getAnnonces(){
		Meteor.call('listeAnnonces', (err,res)=>{
			if(err){
				console.log(err )
			}else{

				this.setState({annonces  : res})


			}
		})
	}
	componentWillMount(){
		this.getAnnonces();
}

	render(){
		this.remplirTableau()
		return (
			<div>
				<Titre1 nom="Liste des Annonces"></Titre1>
				 <MenuDeroulant donnees={this.categories}></MenuDeroulant>
				 <MenuDeroulant donnees={this.etat}></MenuDeroulant>
				 <MenuDeroulant donnees={this.type}></MenuDeroulant>
				<TableauActions donnees= {this.annonces} etatDrop={this.etatDrop.bind(this)}></TableauActions>
				 <Button type='Envoyer' onClick={this.appliquer.bind(this)}>Appliquer</Button>
			</div>

		);
	}
}
