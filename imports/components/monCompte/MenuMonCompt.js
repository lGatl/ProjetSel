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

          MesInformations
        </Menu.Item>

        <Menu.Item name='MonReleveDeCompte' active={activeItem === 'MonReleveDeCompte'} onClick={this.handleItemClick}>

          MonReleveDeCompte
        </Menu.Item>

        <Menu.Item name='DeposezUneOffre' active={activeItem === 'DeposezUneOffre'} onClick={this.handleItemClick}>

          DeposezUneOffre
        </Menu.Item>

        <Menu.Item name='MesOffres' active={activeItem === 'MesOffres'} onClick={this.handleItemClick}>

          MesOffres
        </Menu.Item>
        <Menu.Item name='MesDemandes' active={activeItem === 'MesDemandes'} onClick={this.handleItemClick}>

          MesDemandes
        </Menu.Item>
        <Menu.Item name='MesPropositions' active={activeItem === 'MesPropositions'} onClick={this.handleItemClick}>

          MesPropositions
        </Menu.Item>

      </Menu>
    )
  }
}
