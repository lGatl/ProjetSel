import React from 'react'
import { Icon, Label, Menu, Table, Dropdown } from 'semantic-ui-react'

const TabAnnonces = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Nom Prénom</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Categorie</Table.HeaderCell>
          <Table.HeaderCell>Titre Annonce</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        
        <Table.Row>
          <Table.Cell>02/02/2017</Table.Cell>
          <Table.Cell>SUPER Didier</Table.Cell>
          <Table.Cell>Demande</Table.Cell>
          <Table.Cell>Cuisine</Table.Cell>
          <Table.Cell>Cours de cuisine</Table.Cell>
          <Table.Cell>
            <Dropdown simple text='Actions' className='item'>
              <Dropdown.Menu>
                <Dropdown.Item>Valider</Dropdown.Item>
                <Dropdown.Item>Editer</Dropdown.Item>
                <Dropdown.Item>Refuser</Dropdown.Item>
                <Dropdown.Item>Supprimer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Table.Cell>
        </Table.Row>
        
        <Table.Row>
          <Table.Cell>07/03/2017</Table.Cell>
          <Table.Cell>BUCKANON Mitch</Table.Cell>
          <Table.Cell>Offre</Table.Cell>
          <Table.Cell>Mécanique</Table.Cell>
          <Table.Cell>Vidange</Table.Cell>
          <Table.Cell>
            <Dropdown simple text='Actions' className='item'>
              <Dropdown.Menu>
                <Dropdown.Item>Valider</Dropdown.Item>
                <Dropdown.Item>Editer</Dropdown.Item>
                <Dropdown.Item>Refuser</Dropdown.Item>
                <Dropdown.Item>Supprimer</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
          </Table.Cell>
        </Table.Row>
        
        <Table.Row>
          <Table.Cell> </Table.Cell>
          <Table.Cell> </Table.Cell>
          <Table.Cell> </Table.Cell>
          <Table.Cell> </Table.Cell>
          <Table.Cell> </Table.Cell>
          <Table.Cell>
            <Dropdown simple text='Actions' className='item'>
              <Dropdown.Menu>
                <Dropdown.Item>Valider</Dropdown.Item>
                <Dropdown.Item>Editer</Dropdown.Item>
                <Dropdown.Item>Refuser</Dropdown.Item>
                <Dropdown.Item>Supprimer</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
          </Table.Cell>
        </Table.Row>
      </Table.Body>

    </Table>
  )
}

export default TabAnnonces