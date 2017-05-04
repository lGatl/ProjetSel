import React, {Component} from 'react';

import CarteSeliste from '../components/CarteSeliste.js';
import { Card } from 'semantic-ui-react'
import { Segment,Grid } from 'semantic-ui-react'
import Titre from '../components/Titre.js'
import Filtres from '../components/Filtres.js'
import {createContainer} from 'meteor/react-meteor-data';
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

	render(){

		if(this.props.logged){
			if(this.props.usrs){
				return (


					<div>
						<Titre nom="LES SÉLISTES"></Titre>
							<Grid>
								<Grid.Column mobile={16} tablet={16} computer={2} only="computer"></Grid.Column>
								<Grid.Column mobile={16} tablet={16} computer={12}>
									<Filtres option={this.state.option}></Filtres>

									 <Card.Group className="ui grid middle centered">
									{
										this.props.usrs.map((utilisateur,i)=><CarteSeliste utilisateur={utilisateur} key={i}> </CarteSeliste>)
									}
									 </Card.Group>
								</Grid.Column>
							<Grid.Column mobile={16} tablet={16} computer={2} only="computer"></Grid.Column>
						</Grid>

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
		 usrs:usr.usrs.get()
	 };
 } , LesSeliste );

 export default LesSelistes;
