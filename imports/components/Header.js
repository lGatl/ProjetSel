
import React, {Component} from 'react';
import { Header,Image } from 'semantic-ui-react'

export default class HeaderS extends Component {

	componentWillMount(){
	document.getElementsByClassName("header")
		console.log("document.getElementsByClassName(\"header\")", document.getElementsByClassName("monheader"));

	}
	render(){

		return (

			<Header as='h2' icon textAlign='center' className="monheader">

				<Header.Content>

          			<Image className='logoSel' src='images/logo-seliste-1.png'/>
					<h1 className="titreHeader"> La Croix Rouge de Damvillers <br/> vous présente son SEL </h1>
					<Image className='croixrouge' src='images/croixrouge.jpg' />
				</Header.Content>

			</Header>
		);
	}
}
