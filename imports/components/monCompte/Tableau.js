import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'

export default class Tableau extends Component {
	render(){
		return (

			<Table striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Date</Table.HeaderCell>
						<Table.HeaderCell>Nom Prenom du Donneur</Table.HeaderCell>
						<Table.HeaderCell >Categorie</Table.HeaderCell>
						<Table.HeaderCell >Titre de l'annonceur</Table.HeaderCell>
						<Table.HeaderCell >Nombre de seugnettes</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					<Table.Row>
						<Table.Cell>02/02/2017</Table.Cell>
						<Table.Cell>Jean Bon</Table.Cell>
						<Table.Cell>Cuisine</Table.Cell>
						<Table.Cell>Cours de Cuisine</Table.Cell>
						<Table.Cell>500</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>02/02/2017</Table.Cell>
						<Table.Cell>Jean Bon</Table.Cell>
						<Table.Cell>Cuisine</Table.Cell>
						<Table.Cell>Cours de Cuisine</Table.Cell>
						<Table.Cell>500</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>02/02/2017</Table.Cell>
						<Table.Cell>Jean Bon</Table.Cell>
						<Table.Cell>Cuisine</Table.Cell>
						<Table.Cell>Cours de Cuisine</Table.Cell>
						<Table.Cell>500</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>02/02/2017</Table.Cell>
						<Table.Cell>Jean Bon</Table.Cell>
						<Table.Cell>Cuisine</Table.Cell>
						<Table.Cell>Cours de Cuisine</Table.Cell>
						<Table.Cell>500</Table.Cell>
					</Table.Row>


				</Table.Body>
			</Table>

		);
	}
}

