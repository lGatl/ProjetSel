import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {LoginButtons} from 'meteor/okgrow:accounts-ui-react'


export default class MenuS extends Component {
	constructor(){
		super()
		this.state = { activeItem: 'Acceuil' }

		this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	}


	render(){
		 const { activeItem } = this.state
		return (

			<div>
				<Menu pointing secondary>
					<Menu.Item name='Acceuil' href='/'   active={activeItem === 'Acceuil'} onClick={this.handleItemClick} />
					<Menu.Item name='Kesako' href='/kesako'  active={activeItem === 'Kesako'} onClick={this.handleItemClick} />
					<Menu.Item name='Annonces' href='/annonces' active={activeItem === 'Annonces'} onClick={this.handleItemClick} />
					<Menu.Item name='Actualites'  href='/actualites'  active={activeItem === 'Actualites'} onClick={this.handleItemClick} />
					<Menu.Item name='Contacts' href='/contacts'   active={activeItem === 'Contacts'} onClick={this.handleItemClick} />
					<Menu.Item name='MonCompte' href='/monCompte'   active={activeItem === 'MonCompte'} onClick={this.handleItemClick} />
					<Menu.Item name='LesSelistes' href='/lesSelistes'   active={activeItem === 'LesSelistes'} onClick={this.handleItemClick} />

					<Menu.Menu >
						<Menu.Item ><LoginButtons></LoginButtons></Menu.Item>
					</Menu.Menu>
				</Menu>


			</div>
		);
	}
}
