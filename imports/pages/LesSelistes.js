import React, {Component} from 'react';
import CarteSeliste from '../components/CarteSeliste.js';
import { Card } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import Titre from '../components/Titre.js'
import Filtres from '../components/Filtres.js'



export default class LesSelistes extends Component {
	constructor(){
	super()
	this.state={utilisateurs:[]}
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
		return (

			<div className="">
				<Titre nom="Les Selistes"></Titre>
					<Filtres></Filtres>
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
	}
}
