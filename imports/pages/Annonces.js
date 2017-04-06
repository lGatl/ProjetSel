import React, {Component} from 'react';

import {Segment} from 'semantic-ui-react';

import EncartAnnonce from '../components/EncartAnnonce.js';
import Onglets from '../components/Onglets.js'
import Filtres from '../components/Filtres.js'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'
import {annonces} from '../API/annonces.js'
import Titre from '../components/Titre.js'


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

	componentWillMount(){

		this.props.setActif('Annonces')


	}
	recup(actif){
		this.setState({actif:actif})

	}



	render(){
		return (

			<div >

				<Titre nom="ANNONCES"></Titre>
			<Segment>
			<Filtres option={this.state.option}></Filtres>
			</Segment>
				<Onglets recup={this.recup.bind(this)}></Onglets>
				{
					this.props.liste.map((annonce,i)=>{
						if(annonce.etat=="Valider"){
							if(this.state.actif=="toutes"){
								return(<EncartAnnonce key={i} donnees={annonce}></EncartAnnonce>)
							}

							if(this.state.actif=="offres"){
								if(annonce.type=="offre"){
									return(<EncartAnnonce key={i} donnees={annonce}></EncartAnnonce>)
								}
							}
							if(this.state.actif=="demandes"){
								if(annonce.type=="demande"){
									return(<EncartAnnonce key={i} donnees={annonce}></EncartAnnonce>)
								}
							}
						}
					})

				}


			</div>
		);
	}
}
 export default Annonces = createContainer( ()=>{

 	return{
 		setActif:menu.setActif,
 		liste:annonces.rev.get()
	}
 } , Annonce );
