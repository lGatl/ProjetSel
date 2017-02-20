import React from 'react'
import { Form } from 'semantic-ui-react'

const AjoutArticle = () => (


  <Form>
  <h4> AJOUTER UN NOUVEL ARTICLE </h4>
    <Form.Group widths='equal'>
      <Form.Field label="Titre de l'article" control='input' />
    </Form.Group>
    
    <Form.Field label="Description de l'article" control='textarea' rows='4' />
    <Form.Field label='' control='button'>
      VALIDER
    </Form.Field>
  </Form>
)

export default AjoutArticle