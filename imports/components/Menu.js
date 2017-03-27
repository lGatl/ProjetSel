import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';

class MenuSS extends Component {

	constructor(){
		super()
		this.state = {
			activeItem: 'Acceuil',
		}
		this.listeMenu=[
				{titre:"Acceuil",href:"/",doitlog:"non"},
				{titre:"Kesako",href:"/kesako",doitlog:"non"},
				{titre:"Annonces",href:"/annonces",doitlog:"non"},
				{titre:"Actualites",href:"/actualites",doitlog:"non"},
				{titre:"Contacts",href:"/contacts",doitlog:"non"},
				{titre:"MonCompte",href:"/monCompte",doitlog:"oui"},
				{titre:"LesSelistes",href:"/lesSelistes",doitlog:"oui"},
				{titre:"CreerUnCompte",href:"/creerUnCompte",doitlog:"sans"},
				{titre:"Connexion",href:"/connexion",doitlog:"sans"},
				{titre:"Deconnexion",href:"/",doitlog:"oui"}
		]
	}
	logout(){
		Meteor.logout((err)=>{
			if(err){
				Bert.alert({
					title:"Erreur réseau ",
					message: "Nous n'avons pas pu vous déconnecter",
					type: 'danger'
				});
			} else {
				Bert.alert({
					title:"Déconnexion",
					message: "Vous êtes maintenant déconnecté",
					type: 'success'
				});
			}
		});
	}

	handleItemClick (e, { name }){
		if(name=="Deconnexion"){
			this.logout()
			this.setState({ activeItem: "Acceuil" })
		}
		this.setState({ activeItem: name })

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

		 const { activeItem } = this.state
		return (

			<div >
				<Menu pointing secondary>
					{
						liste.map((it,i)=>{
							return(
								<Menu.Item name={it.titre} href={it.href} key={i}  active={activeItem === it.titre} onClick={this.handleItemClick.bind(this)} />
							)
						})
					}
				</Menu>


			</div>
		);
	}
}
 var MenuS = createContainer( ()=>{
	 return {
		 loggedin: Meteor.userId()
	 };
 } , MenuSS );

 export default MenuS;
