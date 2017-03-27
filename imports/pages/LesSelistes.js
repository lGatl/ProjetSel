import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import CarteSeliste from '../components/CarteSeliste.js';
import { Card } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import Titre from '../components/Titre.js'
import Filtres from '../components/Filtres.js'



class LesSeliste extends Component {
	constructor(){
	super()
	this.state={
		utilisateurs:[],
		option:[
				{titre:"Categories :",contenu:["Cuisine","Mecanique"]},
				{titre:"Distances :",contenu:["0-5 km","5-10 km"]},
				{titre:"Les plus recents :",contenu:["< 1 semaine","< 2 semaines"]}]
		}
	}
	componentWillMount(){
		Meteor.call('utilisateurs',(err,res)=>{
			if(err){
				console.log(err)
			}else{
				this.setState({utilisateurs:res})

			}
		})
	}

	render(){
		if(this.props.loggedin){
				return (


					<div className="">
						<Titre nom="Les Selistes"></Titre>
							<Filtres option={this.state.option}></Filtres>
						 <Card.Group>
						 {

						 	this.state.utilisateurs.map((utilisateur,i)=>{
								return(
										<CarteSeliste utilisateur={utilisateur} key={i}> </CarteSeliste>
									)
							 })
						 }


						 </Card.Group>


					</div>
				);
		}else{
			return(<div>Vous devez vous connecter pour pouvoir acceder à cette page</div>)

		}
	}
}
 var LesSelistes = createContainer( ()=>{
	 return {
		 loggedin: Meteor.userId()
	 };
 } , LesSeliste );

 export default LesSelistes;
