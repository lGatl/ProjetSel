import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react'

import MenuMonCompt from '../components/monCompte/MenuMonCompt.js'

import Titre from "../components/Titre.js"

import Categories from '../components/monCompte/pages/Categories.js'
import Configuration from '../components/monCompte/pages/Configuration.js'
import DepotDemande from '../components/monCompte/pages/DepotDemande.js'
import DepotOffre from '../components/monCompte/pages/DepotOffre.js'
import GererActu from '../components/monCompte/pages/GererActu.js'
import GererAnnonces from '../components/monCompte/pages/GererAnnonces.js'
import MesDemandes from '../components/monCompte/pages/MesDemandes.js'
import MesInfos from '../components/monCompte/pages/MesInfos.js'
import MesOffres from '../components/monCompte/pages/MesOffres.js'
import MesPropositions from '../components/monCompte/pages/MesPropositions.js'
import MonReleve from '../components/monCompte/pages/MonReleve.js'
import Statistiques from '../components/monCompte/pages/Statistiques.js'
import GererUnCompte from "../components/monCompte/pages/GererUnCompte.js"


import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'
import {usr} from '../API/usr.js'


class MonCompt extends Component {

	componentWillMount(){
		this.props.setActif('MonCompte')
		this.setState({nom:"Mes informations"})

	}
		constructor(){
			super()
			this.state={nom:""}
			this.menuMonCompte=[
				"Mes informations",
				"Mon relevé de compte",
				"Deposez une offre",
				"Deposez une demande",
				"Mes Offres",
				"Mes Demandes",
				"Mes Propositions"
			];
			this.menuAdministrationTitre="Mon Compte"
			this.menuAdministration=[
				"Gerer les annonces",
				"Categories",
				"Gerer les actualités",
				"Configuration",
				"Statistiques",
				"Gerer les comptes"
			];
		}

		contenu(nom){
			this.setState({nom:nom})
		}
		page(nom){
			if(this.props.usrCo.username){
				if(nom=="Mes informations")		{return(<MesInfos></MesInfos>)}
				if(nom=="Mon relevé de compte"){return( <MonReleve></MonReleve>)}
				if(nom=="Deposez une offre")	{return(<DepotOffre></DepotOffre>)}
				if(nom=="Deposez une demande"){return(<DepotDemande></DepotDemande>)}
				if(nom=="Mes Offres")			{return(<MesOffres></MesOffres>)}
				if(nom=="Mes Demandes")		{return(<MesDemandes></MesDemandes>)}
				if(nom=="Mes Propositions")		{return(<MesPropositions></MesPropositions>)}
				if(nom=="Gerer les annonces")	{return(<GererAnnonces></GererAnnonces>)}
				if(nom=="Categories")			{return( <Categories></Categories>)}
				if(nom=="Gerer les actualités")	{return(<GererActu></GererActu>)}
				if(nom=="Configuration")			{return(<Configuration></Configuration>)}
				if(nom=="Statistiques")			{return(<Statistiques></Statistiques>)}
				if(nom=="Gerer les comptes")	{return(<GererUnCompte></GererUnCompte>)}
			}
		}

	render(){
			if(this.props.loggedin){
				return (

			<div>
				<Titre nom={"MON COMPTE"}></Titre>
				 <Grid>
					 <Grid.Column mobile={16} tablet={4} computer={3}>
						<MenuMonCompt contenu={this.contenu.bind(this)} titre="Mon Compte" menuMonCompte={this.menuMonCompte}></MenuMonCompt> <br/>
						<MenuMonCompt contenu={this.contenu.bind(this)} titre="Administration" menuMonCompte={this.menuAdministration}></MenuMonCompt>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={16} computer={1} only="computer"></Grid.Column>

					<Grid.Column mobile={16} tablet={11} computer={10}>
						{this.page(this.state.nom)}
					</Grid.Column>
					 <Grid.Column mobile={16} tablet={16} computer={2} only="computer"></Grid.Column>
				</Grid>
			</div>
		);

		}else{
			return(<div>Vous devez vous connecter pour pouvoir acceder à cette page</div>)

	}
	}
}
 var MonCompte = createContainer( ()=>{
	 return {
		 loggedin: Meteor.userId(),
		 setActif:menu.setActif,
		 usrCo:usr.usrCo.get()

	 };
 } , MonCompt );

 export default MonCompte;
