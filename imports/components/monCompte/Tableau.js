import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'

export default class Tableau extends Component {

	render(){

		return (

			<Table striped>
				<Table.Header>
					<Table.Row>
						{this.props.donnees.titres.map((titre,i)=><Table.HeaderCell key={i}>{titre}</Table.HeaderCell>)}
					</Table.Row>
				</Table.Header>

				<Table.Body>
				{
					this.props.donnees.contenu.map((ligne,i)=>{
						return(
							<Table.Row key={i}>
								{ligne.map((cellule,j)=><Table.Cell key={j}>{cellule}</Table.Cell>)}
							</Table.Row>
						)
					})
				}

				</Table.Body>
			</Table>

		);
	}
}

