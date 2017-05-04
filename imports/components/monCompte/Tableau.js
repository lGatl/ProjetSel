import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
import ImgSeu from './ImgSeu.js'

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
								{ligne.map((cellule,j)=>{
									if(j==4){return(<Table.Cell key={j}>{cellule} <ImgSeu/></Table.Cell>)
									}else{return(<Table.Cell key={j}>{cellule}</Table.Cell>)}})}
							</Table.Row>
						)
					})
				}

				</Table.Body>
			</Table>

		);
	}
}

