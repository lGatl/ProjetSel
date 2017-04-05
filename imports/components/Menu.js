import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {usr} from '../API/usr.js'
import {menu} from '../API/menu.js'

class MenuSS extends Component {

	constructor(){
		super()

		this.listeMenu=[
				{titre:"Accueil",href:"/",doitlog:"non"},
				{titre:"Kesako",href:"/kesako",doitlog:"non"},
				{titre:"Annonces",href:"/annonces",doitlog:"non"},
				{titre:"Actualites",href:"/actualites",doitlog:"non"},
				{titre:"Contact",href:"/contacts",doitlog:"non"},
				{titre:"MonCompte",href:"/monCompte",doitlog:"oui"},
				{titre:"LesSelistes",href:"/lesSelistes",doitlog:"oui"},
				{titre:"Creer un compte",href:"/creerUnCompte",doitlog:"sans"},
				{titre:"Connexion",href:"/connexion",doitlog:"sans"},
				{titre:"Deconnexion",href:"/",doitlog:"oui"}
		]
	}


	handleItemClick (e, { name }){
		if(name=="Deconnexion"){
			usr.deco()
		}
	}

	render(){

			var liste=[]
			if(this.props.loggedin){
				this.listeMenu.map((it,i)=>{
					if(it.doitlog=="non"||it.doitlog=="oui"){
					liste.push(it)
				}
				})
			}else{
				this.listeMenu.map((it,i)=>{
					if(it.doitlog=="non"||it.doitlog=="sans"){
					return(
						liste.push(it)
					)
					}
				})
			}


		return (


				<Menu className="ui grid middle centered" reversed stackable pointing secondary inverted color='red'>
					{
						liste.map((it,i)=>{
							return(
								<Menu.Item className="navbar" name={it.titre} href={it.href} key={i}  active={it.titre === this.props.actifMenu} onClick={this.handleItemClick.bind(this)} />
							)
						})
					}
				</Menu>



		);
	}
}
 var MenuS = createContainer( ()=>{

	 return {
		loggedin:usr.logged.get(),
		actifMenu:menu.actif.get()


	 };

 } , MenuSS );

 export default MenuS;
