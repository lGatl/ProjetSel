import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class Onglets extends Component {

constructor(){
	super()

	this.state = { activeItem: 'bio' }
	this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
}




	render() {
		const { activeItem } = this.state

		return (
			<div>
				<Menu attached='top' tabular>
					<Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
					<Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick} />
					<Menu.Item name='graphie' active={activeItem === 'graphie'} onClick={this.handleItemClick} />

				</Menu>

				<Segment attached='bottom'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugiat harum officia, numquam molestias inventore enim rem nisi? Omnis praesentium voluptatum delectus aliquid, laboriosam autem pariatur reprehenderit totam quod consequatur.
				</Segment>
			</div>
		)
	}
}
