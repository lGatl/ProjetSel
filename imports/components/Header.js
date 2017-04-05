
import React, {Component} from 'react';
import { Header,Image } from 'semantic-ui-react'

export default class HeaderS extends Component {
	render(){
		return (

			<Header as='h2' icon textAlign='center'>

				<Header.Content>
				<div>
          			<Image className='logoSel' src='images/logo-seliste-1.png'/>
          		</div>
					<h1 className="titreHeader"> La Croix Rouge de Damvillers <br/> vous présente son SEL </h1>
					<Image className='croixrouge' src='images/croixrouge.jpg' />
				</Header.Content>

			</Header>
		);
	}
}
