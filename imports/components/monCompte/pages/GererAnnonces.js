import React, {Component} from 'react'
import { Button} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import MenuDeroulant from '../../MenuDeroulant.js';
import TableauActions from '../TableauActions.js'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../../../API/annonces.js'


class GererAnnonce extends Component {
	constructor(){
		super()
		this.state={
			etat:[]
		}
			this.categories={titre:"Catégories :",contenu:["Cuisine","Mecanique"]}
			this.type={titre:"Type",contenu:["Offre","Demande"]}
			this.etat={titre:"Etat",contenu:["scddcd","dsdfdsfds"]}
	}


		tableauActions(){

		if(this.props.annonces.liste){

			return(
				<TableauActions
					donnees={{
						titres:["Date","Séliste","Type","Catégorie","Titre de l'annonce"],
						contenu:this.props.annonces.liste.map((ann,i)=>{
							var date = new Date(ann.date)

							return(
								{tableau:[
									(date.getUTCDate()<10?" 0"+date.getUTCDate():" "+date.getUTCDate())+"/"+
										((date.getUTCMonth() + 1)<10?"0"+(date.getUTCMonth() + 1):(date.getUTCMonth() + 1))
										+"/"+date.getUTCFullYear(),
									ann.utilisateur.username,
									ann.type,
									ann.categorie,
									<a href={"/annonces/"+ann.titre} className="aSpe">{ann.titre}</a>
								],etat: this.state.etat[i]}
							)
						}),

						actions:{
							titre:"Actions",
							contenu:["Valider","En Attente","Refuser","Supprimer"]
						}
					}}
					etatDrop={this.etatDrop.bind(this)}

				></TableauActions>
			)
		}
	}
		supprimeAnnonce(aSuppr){

			this.props.annonces.supprime(aSuppr,()=>{})
		}

	appliquer(e){
		e.preventDefault()
		var j=0
		var s=""
		var mot=" mis a jour "
		var message= "Vos annonces ont été mis a jour"
		this.state.etat.map((et,i)=>{
			var aSauv={}
			if(et=="Supprimer"){
				j++
				this.supprimeAnnonce(this.props.annonces.liste[i]._id)
			}else if(et){
				var aSauv=this.props.annonces.liste[i]
				aSauv.etat=et

				this.props.annonces.sauve(aSauv)
			}
		})
		if(j>1){
			message= "Vos annonces ont été supprimés"
			s="s"
			mot=" supprimés"
		}else if(j==1){
			message= "Votre annonce a été supprimé"
			mot=" supprimé"
		}
		Bert.alert({
					title:"annonce"+s+mot,
					message:message,
					type:'success'
				})

		this.props.annonces.recup((res)=>{
			if(res){
				this.initEtat(res)
			}else{

			}
		})

}
	initEtat(res){
		var tab=res.map((ann)=>ann.etat)
		this.setState({etat:tab})
	}

	etatDrop(id,value){
			var tab=this.state.etat
			tab[id]=value
			this.setState({etat:tab})
	}
	componentWillMount(){

		this.props.annonces.recup((res)=>{
			if(res){
				this.initEtat(res)
			}else{

			}
		})
	}


	render(){


		return (
			<div>
				<Titre1 nom="Liste des annonces"></Titre1>
				 <MenuDeroulant donnees={this.categories}></MenuDeroulant>
				 <MenuDeroulant donnees={this.etat}></MenuDeroulant>
				 <MenuDeroulant donnees={this.type}></MenuDeroulant>
				{this.tableauActions()}
				 <Button type='Envoyer' onClick={this.appliquer.bind(this)}>Appliquer</Button>
			</div>

		);
	}
}
export default GererAnnonces = createContainer( ()=>{

 	return{
 		annonces:{
 			liste:annonces.liste.get(),
 			sauve:annonces.sauve,
 			supprime:annonces.supprime,
 			recup:annonces.recup
 		},
 	}

 } , GererAnnonce );
