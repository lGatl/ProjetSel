import React, {Component} from 'react';

import {Segment} from 'semantic-ui-react';

import EncartAnnonce from '../components/EncartAnnonce.js';
import Onglets from '../components/Onglets.js'
import Filtres from '../components/Filtres.js'
import {createContainer} from 'meteor/react-meteor-data';
import {annonces} from '../API/annonces.js'
import {propositions} from '../API/propositions.js'
import Titre from '../components/Titre.js'
import { Grid } from 'semantic-ui-react'



class Annonce extends Component {

	constructor(){
		super()
		this.state={
			annonces:[],
			actif:"toutes",
			option:[
				{titre:"Categories :",contenu:["Cuisine","Mecanique"]},
				{titre:"Distances :",contenu:["0-5 km","5-10 km"]},
				{titre:"Les plus recents :",contenu:["< 1 semaine","< 2 semaines"]}]
		}
	}

	recup(actif){
		this.setState({actif:actif})

	}



	render(){
		return (
			<div>
			<Titre nom="ANNONCES"></Titre>
				<Grid>
					<Grid.Column mobile={16} tablet={16} computer={1} only="computer"></Grid.Column>
					<Grid.Column mobile={16} tablet={16} computer={14}>
						<Filtres option={this.state.option}></Filtres>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={16} computer={1} only="computer"></Grid.Column>
				</Grid>
				<Grid>
					<Grid.Column mobile={16} tablet={16} computer={2} only="computer"></Grid.Column>
						<Grid.Column mobile={16} tablet={16} computer={12}>

								<Onglets recup={this.recup.bind(this)}></Onglets>
								{
									this.props.liste.map((annonce,i)=>{
										if(annonce.etat=="Valider"){
											if(this.state.actif=="toutes"){
												return(<EncartAnnonce key={i} donnees={annonce} propositions={this.props.propositions.liste}></EncartAnnonce>)
											}

											if(this.state.actif=="offres"){
												if(annonce.type=="offre"){
													return(<EncartAnnonce key={i} donnees={annonce} propositions={this.props.propositions.liste}></EncartAnnonce>)
												}
											}
											if(this.state.actif=="demandes"){
												if(annonce.type=="demande"){
													return(<EncartAnnonce key={i} donnees={annonce}propositions={this.props.propositions.liste}></EncartAnnonce>)
												}
											}
										}
									})
								}
					</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={2} only="computer"></Grid.Column>
			</Grid>
			</div>
		);
	}
}
 export default Annonces = createContainer( ()=>{

 	return{
		propositions:{
 			liste:propositions.liste.get()

 		},
 		liste:annonces.rev.get()
	}
 } , Annonce );
