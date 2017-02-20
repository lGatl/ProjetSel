import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class FormContact extends Component {

  render(){
    return(
 <Form>
    <Form.Field>
    <label><h1>Formulaire de Contact</h1></label>
      <label>Nom</label>
      <input placeholder='Nom' />
    </Form.Field>
    <Form.Field>
      <label>Prénom</label>
      <input placeholder='Prénom' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='exemple@exemple.com' />
    </Form.Field>
    <Form.Field>
      <label>Téléphone</label>
      <input placeholder='Téléphone' />
    </Form.Field>
    <Form.TextArea name='details' label='Motif de votre message' placeholder='motif' rows='1' />
    <Form.TextArea name='details' label='Votre message' placeholder='Votre message' rows='3' />
    <Button type='submit'>Submit</Button>
  </Form>
      )
  }


}

