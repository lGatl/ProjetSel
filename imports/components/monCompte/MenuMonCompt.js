
import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuMonCompt extends Component {

 constructor(){
	super()
	this.state = { activeItem: 'inbox' }

	this.handleItemClick = (e, { name }) => {

	this.setState({ activeItem: name })
	this.props.contenu({name})
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
			<Menu vertical size='tiny'>
				<Menu.Item header>{this.props.titre}</Menu.Item>

					{menuItem}

			</Menu>
			</div>
			)
	}
}
