import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {LoginButtons} from 'meteor/okgrow:accounts-ui-react'


export default class MenuS extends Component {
	constructor(){
		super()
		this.state = {
			activeItem: 'Acceuil',
			listeMenu:[]
		}

		this.listeMenu= [
				{titre:"Acceuil",href:"/"},
				{titre:"Kesako",href:"/kesako"},
				{titre:"Annonces",href:"/annonces"},
				{titre:"Actualites",href:"/actualites"},
				{titre:"Contacts",href:"/contacts"},
				{titre:"MonCompte",href:"/monCompte"},
				{titre:"LesSelistes",href:"/lesSelistes"}
			]


	}
		handleItemClick (e, { name }){

		this.setState({ activeItem: name })}
		testConnex(e){
			if(e){e.preventDefault()}
			Meteor.call("testConnex", (err,res)=>{
				if(err){
					this.setState({listeMenu:this.listeMenu.slice(0, 5)})
				}else{
					if(!res){
						this.setState({listeMenu:this.listeMenu.slice(0, 5)})
					}else{this.setState({listeMenu:this.listeMenu})}}
			})
		}

			componentWillMount(){
				this.testConnex()
			}

	render(){
		 const { activeItem } = this.state
		return (

			<div >
				<Menu pointing secondary>
					{
						this.state.listeMenu.map((it,i)=>{
							return(
								<Menu.Item name={it.titre} href={it.href} key={i}  active={activeItem === it.titre} onClick={this.handleItemClick.bind(this)} />

							)
						})
					}


					<Menu.Item><LoginButtons ></LoginButtons></Menu.Item>
				</Menu>


			</div>
		);
	}
}
