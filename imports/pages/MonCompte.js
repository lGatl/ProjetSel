import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';

import MenuMonCompt from '../components/monCompte/MenuMonCompt.js'

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



class MonCompt extends Component {
		constructor(){
			super()
			this.state={nom:""}
			this.menuMonCompte=[
				"Mes informations",
				"Mon relevé de comte",
				"Deposez une offre",
				"Deposez une demande",
				"Mes Offres",
				"Mes Demandes",
				"Mes Propositons"
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

				if(nom.name=="Mes informations")		{return(<MesInfos></MesInfos>)}
				if(nom.name=="Mon relevé de comte")	{return( <MonReleve></MonReleve>)}
				if(nom.name=="Deposez une offre")	{return(<DepotOffre></DepotOffre>)}
				if(nom.name=="Deposez une demande")	{return(<DepotDemande></DepotDemande>)}
				if(nom.name=="Mes Offres")			{return(<MesOffres></MesOffres>)}
				if(nom.name=="Mes Demandes")		{return(<MesDemandes></MesDemandes>)}
				if(nom.name=="Mes Propositons")		{return(<MesPropositions></MesPropositions>)}
				if(nom.name=="Gerer les annonces")	{return(<GererAnnonces></GererAnnonces>)}
				if(nom.name=="Categories")			{return( <Categories></Categories>)}
				if(nom.name=="Gerer les actualités")	{return(<GererActu></GererActu>)}
				if(nom.name=="Configuration")			{return(<Configuration></Configuration>)}
				if(nom.name=="Statistiques")			{return(<Statistiques></Statistiques>)}
				if(nom.name=="Gerer les comptes")	{return(<GererUnCompte></GererUnCompte>)}

		}

	render(){
			if(this.props.loggedin){
				return (

			<div className="">
				<h1>Mon Compte</h1>
				 <Grid>
					 <Grid.Column width={3}>
						<MenuMonCompt contenu={this.contenu.bind(this)} titre="Mon Compte" menuMonCompte={this.menuMonCompte}></MenuMonCompt> <br/>
						<MenuMonCompt contenu={this.contenu.bind(this)} titre="Administration" menuMonCompte={this.menuAdministration}></MenuMonCompt>
					</Grid.Column>

					<Grid.Column width={10}>
						{this.page(this.state.nom)}
					</Grid.Column>
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
		 loggedin: Meteor.userId()
	 };
 } , MonCompt );

 export default MonCompte;
