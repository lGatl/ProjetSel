import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class Onglets extends Component {

constructor(){
	super()

	this.state = { activeItem: 'toutes' }
	this.handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
		this.props.recup(name)
	}
}




	render() {
		const { activeItem } = this.state

		return (
			<div>
				<Menu attached='top' tabular>
					<Menu.Item name='toutes' active={activeItem === 'toutes'} onClick={this.handleItemClick.bind(this)} />
					<Menu.Item name='offres' active={activeItem === 'offres'} onClick={this.handleItemClick.bind(this)} />
					<Menu.Item name='demandes' active={activeItem === 'demandes'} onClick={this.handleItemClick.bind(this)} />

				</Menu>
			</div>
		)
	}
}
