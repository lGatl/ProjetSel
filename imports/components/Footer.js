
import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'		//j'importe l'outil Segment de sementic-ui-react

//je cree le composent "Footer" qui est en fait une classe javascript
//On dit a cette classe d'heriter, donc de prendre toutes les fonctionnalitées de Component
//On ne se pose pas de question il faut le faire a chaque fois
export default class Footer extends Component {
	//on pourrait preparer des variables ou meme un constructeur avant render
	render(){//cette fonction est obligatoint pour un composent react
		//on peut faire des calculs ici ils vont se realiser des qu'il faut actualiser, ... ils doivent donc etre legers
		//Dans return, on doit mettre du jsx,
		////les commentaires html ne fonctionnent pas
		//  les commentaires js nomplu sauf si on fait ca

		return (


			<footer>
				 <Segment textAlign='center'>
  					 Ca c'est le Footer du site
  				</Segment>
			</footer>

		);
	}
}
