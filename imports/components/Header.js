
import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'

export default class HeaderS extends Component {
	render(){
		return (

			<Header as='h2' icon textAlign='center' block>

				<Header.Content>
          <img className='logoSel' src='images/logo-seliste-1.png'/>
					Header du Projet Sel
				</Header.Content>

			</Header>
		);
	}
}
