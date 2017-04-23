
import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

import {createContainer} from 'meteor/react-meteor-data';

import {menu} from '../../API/menu.js'

class MenuMonComp extends Component {

 constructor(){
	super()
	this.state = { activeItem: 'Mes informations' }

	this.handleItemClick = (e, { name }) => {
		this.props.menu.prop.set([])
	this.setState({ activeItem: name })
	this.props.contenu(name)
}

 }

	render() {

		const { activeItem } = this.state;
		const menuItem= this.props.menuMonCompte.map((menuM)=>{

			return(
				<Menu.Item key={menuM} name={menuM} active={activeItem ===menuM} onClick={this.handleItemClick} />
			)
		})


		return (
			<div>
			<Menu fluid vertical >
				<Menu.Item header>{this.props.titre}</Menu.Item>

					{menuItem}

			</Menu>
			</div>
			)
	}
}
export default MenuMonCompt = createContainer( ()=>{

 	return{
		menu:{
			prop:menu.prop
		}
 	}

 } ,  MenuMonComp);
