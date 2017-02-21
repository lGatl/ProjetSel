import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
import Titre1 from './monCompte/Titre1.js'
import { Rating, Button, Table, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

export default class AnnonceDesc extends Component {
	render(){
		return(

				<Segment>
					<Segment.Group horizontal basic>
						<Segment basic>
								<Item>
									<Item.Image src='https://placehold.it/200x200' />
								</Item>

									<Table celled>
										<Table.Header>
											<Table.Row>
												<Table.HeaderCell>Catégorie</Table.HeaderCell>
												<Table.HeaderCell></Table.HeaderCell>
											</Table.Row>
										</Table.Header>

										<Table.Body>
											<Table.Row>
												<Table.Cell>Date de début</Table.Cell>
												<Table.Cell>**/**/****</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>Date de fin</Table.Cell>
												<Table.Cell>**/**/****</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>Statut</Table.Cell>
												<Table.Cell>Disponible</Table.Cell>
											</Table.Row>
										</Table.Body>
									</Table>
							</Segment>
						<Segment basic>
							<Titre1/>
							<span>Description de l'annonce</span>
						</Segment>
					</Segment.Group>


					<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Informations séliste</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								<Table.Row>
									<Table.Cell>John Doe <Rating icon='star' defaultRating={3} maxRating={4} /></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>john.doe@gmail.com</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>

					<Titre1 />

					<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Faire une proposition</Table.HeaderCell>
									<Table.HeaderCell>Commentaire</Table.HeaderCell>
									<Table.HeaderCell></Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								<Table.Row>
									<Table.Cell></Table.Cell>
									<Table.Cell></Table.Cell>
									<Table.Cell textAlign='center'><Button>Valider</Button></Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
				</Segment>

		)
	}
}
