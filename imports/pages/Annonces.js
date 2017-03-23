import React, {Component} from 'react';

import {Segment} from 'semantic-ui-react';

import EncartAnnonce from '../components/EncartAnnonce.js';
import Onglets from '../components/Onglets.js'
import Filtres from '../components/Filtres.js'



export default class Annonces extends Component {

	constructor(){
		super()
		this.state={annonces:[]}
	}

	componentWillMount(){
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
	render(){

		return (

			<div className="">
			<br/>

			<Segment>
			<Filtres></Filtres>
			</Segment>
				<Onglets></Onglets>
				{

					this.state.annonces.map((annonce,i)=>{

						if(annonce.etat=="Valider"){return(
							<EncartAnnonce key={i} donnees={annonce}></EncartAnnonce>
						)}

					})
				}


			</div>
		);
	}
}
