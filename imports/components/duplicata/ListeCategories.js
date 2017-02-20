import React from 'react'
import { Dropdown, Table } from 'semantic-ui-react'

const ListeCategories = () => {
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Catégories</Table.HeaderCell>
          <Table.HeaderCell>Offres</Table.HeaderCell>
          <Table.HeaderCell>Demandes</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Cuisine</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>
            <Dropdown simple text='Actions' className='item'>
              <Dropdown.Menu>
                <Dropdown.Item>Editer</Dropdown.Item>
                <Dropdown.Item>Désactiver</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bricolage</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>
            <Dropdown simple text='Actions' className='item'>
              <Dropdown.Menu>
                <Dropdown.Item>Editer</Dropdown.Item>
                <Dropdown.Item>Désactiver</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jardinage</Table.Cell>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>
            <Dropdown simple text='Actions' className='item'>
              <Dropdown.Menu>
                <Dropdown.Item>Editer</Dropdown.Item>
                <Dropdown.Item>Désactiver</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table>
  )
}

export default ListeCategories