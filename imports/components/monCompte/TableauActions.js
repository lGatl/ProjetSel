
import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
import MenuDeroulant from '../MenuDeroulant.js';

export default class Tableau extends Component {
		constructor(){
		super()

			this.actions=[]
		}

	render(){
				this.actions=this.props.donnees.actions
		return (

			<Table striped>
				<Table.Header>
					<Table.Row>
						{this.props.donnees.titres.map((titre,i)=><Table.HeaderCell key={i}>{titre}</Table.HeaderCell>)}
						<Table.HeaderCell>Action</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
				{
					this.props.donnees.contenu.map((ligne,i)=>{
						return(
							<Table.Row key={i}>
								{ligne.map((cellule,j)=><Table.Cell key={j}>{cellule}</Table.Cell>)}
								<Table.Cell> <MenuDeroulant donnees={this.actions}></MenuDeroulant></Table.Cell>
							</Table.Row>
						)
					})
				}

				</Table.Body>
			</Table>

		);
	}
}

