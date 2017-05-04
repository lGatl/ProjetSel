import React, { Component } from 'react'
import { Menu, Segment,Image } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {usr} from '../API/usr.js'
import {menu} from '../API/menu.js'

class MenuSS extends Component {

	constructor(){
		super()

		this.listeMenu=[
				{titre:"Accueil",doitlog:"non"},
				{titre:"Kesako",doitlog:"non"},
				{titre:"Annonces",doitlog:"non"},
				{titre:"Actualites",doitlog:"non"},
				{titre:"Contact",doitlog:"non"},
				{titre:"MonCompte",doitlog:"oui"},
				{titre:"LesSelistes",doitlog:"oui"},
				{titre:"Creer un compte",doitlog:"sans"},
				{titre:"Connexion",doitlog:"sans"},
				{titre:"Deconnexion",doitlog:"oui"}
		]
	}


	handleItemClick (e, { name }){
		e.preventDefault()

		var href=""
		if(name=="Accueil"){href="/"}
		if(name=="Kesako"){href="/kesako"}
		if(name=="Annonces"){href="/annonces"}
		if(name=="Actualites"){href="/actualites"}
		if(name=="Contact"){href="/contacts"}
		if(name=="MonCompte"){href="/monCompte"}
		if(name=="LesSelistes"){href="/lesSelistes"}
		if(name=="Creer un compte"){href="/creerUnCompte"}
		if(name=="Connexion"){href="/connexion"}
		if(name=="Deconnexion"){
			usr.deco()
		}
		this.props.menu.monCompte.set(false)
		FlowRouter.go(href)
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


				<Menu className="ui grid middle centered"  reversed borderless stackable secondary inverted color='red' attached='bottom'>
					{
						liste.map((it,i)=>{
							return(
								<Menu.Item name={it.titre}  key={i} style={{margin:"1px",textAlign:"center"}}  active={it.titre === this.props.actifMenu} onClick={this.handleItemClick.bind(this)} />
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
		actifMenu:menu.actif.get(),
		menu:{
			monCompte:menu.monCompte
		}


	 };

 } , MenuSS );

 export default MenuS;
