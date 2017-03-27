import React, {Component} from 'react';

import {Segment} from 'semantic-ui-react';

import EncartAnnonce from '../components/EncartAnnonce.js';
import Onglets from '../components/Onglets.js'
import Filtres from '../components/Filtres.js'



export default class Annonces extends Component {

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
		this.getAnnonces()


	}
	recup(actif){
		this.setState({actif:actif})

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


	render(){
		return (

			<div className="">
			<br/>

			<Segment>
			<Filtres option={this.state.option}></Filtres>
			</Segment>
				<Onglets recup={this.recup.bind(this)}></Onglets>
				{
					this.state.annonces.map((annonce,i)=>{
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
