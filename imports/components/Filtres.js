import React, {Component} from 'react'
import { Dropdown, Button, Icon,Segment } from 'semantic-ui-react'
import MenuDeroulant from '../components/MenuDeroulant.js';


export default class Filtres extends Component {

	constructor(){
		super()
		this.state={
			options:[]
		}
	}
	componentWillMount(){
		this.setState({options:this.props.option})
	}
	render(){

		return (
		 <Segment basic >
			{
				this.state.options.map((option,i)=>{
						return(<MenuDeroulant key={option.titre} donnees={option}></MenuDeroulant>)
				})
			}
		</Segment>
		)
	}
}
