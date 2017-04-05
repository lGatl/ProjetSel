import React, {Component} from 'react';

import CarteSeliste from '../components/CarteSeliste.js';
import { Card } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import Titre from '../components/Titre.js'
import Filtres from '../components/Filtres.js'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'
import {usr} from '../API/usr.js'


class LesSeliste extends Component {
	constructor(){
	super()
	this.state={
		option:[
				{titre:"Categories :",contenu:["Cuisine","Mecanique"]},
				{titre:"Distances :",contenu:["0-5 km","5-10 km"]},
				{titre:"Les plus recents :",contenu:["< 1 semaine","< 2 semaines"]}]
		}
	}
	componentWillMount(){
		this.props.setActif('LesSelistes')

	}


	render(){

		if(this.props.logged){
			if(this.props.usrs){
				return (


					<div className="">
						<Titre nom="Les sélistes"></Titre>
						<hr/>
							<Filtres option={this.state.option}></Filtres>
						 <Card.Group>
						{
							this.props.usrs.map((utilisateur,i)=><CarteSeliste utilisateur={utilisateur} key={i}> </CarteSeliste>)
					}
						 </Card.Group>


					</div>
				);
			}else{return(<div></div>)}
		}else{
			return(<div>Vous devez vous connecter pour pouvoir acceder à cette page</div>)

		}
	}
}
 var LesSelistes = createContainer( ()=>{
	 return {
		 logged: usr.logged.get(),
		 setActif:menu.setActif,
		 usrs:usr.usrs.get()
	 };
 } , LesSeliste );

 export default LesSelistes;
