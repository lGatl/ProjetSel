import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuMonCompt extends Component {

 constructor(){
	super()
	this.state = { activeItem: 'inbox' }

	this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })


 }

	render() {
		const { activeItem } = this.state

		return (
			<Menu vertical size='tiny'>
				<Menu.Item header>Mon Compte</Menu.Item>

				<Menu.Item name='MesInformations' active={activeItem === 'MesInformations'} onClick={this.handleItemClick}>
					Mes Informations
				</Menu.Item>

				<Menu.Item name='MonReleveDeCompte' active={activeItem === 'MonReleveDeCompte'} onClick={this.handleItemClick}>
						Mon Releve De Compte
				</Menu.Item>

				<Menu.Item name='DeposezUneOffre' active={activeItem === 'DeposezUneOffre'} onClick={this.handleItemClick}>
						Deposez Une Offre
				</Menu.Item>

				<Menu.Item name='MesOffres' active={activeItem === 'MesOffres'} onClick={this.handleItemClick}>
					 Mes Offres
				</Menu.Item>

				<Menu.Item name='MesDemandes' active={activeItem === 'MesDemandes'} onClick={this.handleItemClick}>
						Mes Demandes
				</Menu.Item>

				<Menu.Item name='MesPropositions' active={activeItem === 'MesPropositions'} onClick={this.handleItemClick}>
						Mes Propositions
				</Menu.Item>

			</Menu>
		)
	}
}
