import React, { Component } from 'react'

import { Checkbox, Form, Input, Select, Button} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Homme', value: 'homme' },
  { key: 'f', text: 'Femme', value: 'femme' },
]

export default class FormInscription extends Component {
  render(){
        return (
          <Form>
  <h4>COORDONNEES</h4>
    <Form.Group widths='equal'>
      <Form.Input label='Nom :' placeholder='Votre nom'  />
      <Form.Input label='Prénom :' placeholder='Votre prénom' />
    </Form.Group>
    <Form.Select options={options} placeholder='Sexe'  />
    <Form.Input label='Adresse E-mail :' placeholder='Votre adresse e-mail'  />
    <Form.Group widths='equal'>
      <Form.Input label='Mot de passe :' placeholder='Votre mot de passe'  />
      <Form.Input label='Confirmation mot de passe :' placeholder='Confirmez votre mot de passe :' />
    </Form.Group>
    <Form.Input label='Adresse postale :' placeholder='Votre adresse'  />
    <Form.Group widths='equal'>
      <Form.Input label='Code postal :' placeholder='Votre code postal'  />
      <Form.Input label='Ville :' placeholder='Votre ville' />
    </Form.Group>
    <Form.Input label='Téléphone fixe ou mobile :' placeholder='Votre téléphone fixe ou mobile'  />

  <h4>ASSURANCE RESPONSABILITE CIVILE</h4>
    <Form.Input label='Compagnie :' placeholder='Votre compagnie'  />
    <Form.Input label='Date de validiré :' placeholder='Votre date de validité'  />


    <Form.Checkbox label="J'approuve les clauses de décharge"  />
    <Button type='Envoyer'>ENVOYER</Button>

  </Form>
)
}
}
