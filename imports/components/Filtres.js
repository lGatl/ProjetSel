import React, {Component} from 'react'
import { Dropdown, Button, Icon,Segment } from 'semantic-ui-react'
import MenuDeroulant from '../components/MenuDeroulant.js';


export default class Filtres extends Component {

	constructor(){
		super()
		this.state={
			options:[
				{titre:"Categories :",contenu:["Cuisine","Mecanique"]},
				{titre:"Distances :",contenu:["0-5 km","5-10 km"]},
				{titre:"Les plus recents :",contenu:["< 1 semaine","< 2 semaines"]}
			]
		}
	}

	render(){

		return (
		 <Segment>
			{
				this.state.options.map((option,i)=>{
						return(<MenuDeroulant key={option.titre} donnees={option}></MenuDeroulant>)
				})
			}
		</Segment>
		)
	}
}
