
import React, {Component} from 'react';
import { Header,Image } from 'semantic-ui-react'

export default class HeaderS extends Component {
	render(){
		return (

			<Header as='h2' icon textAlign='center'>

				<Header.Content>
          <Image floated="left" className='logoSel' src='images/logo-seliste-1.png'/>
					La Croix Rouge de Damvillers <br/> vous présente son SEL
				</Header.Content>

			</Header>
		);
	}
}
