
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
		//les commentaires html ne fonctionnent pas
		//les commentaires js nomplu sauf si on fait ca

		return (


			<footer>
				 <Segment inverted color='red' basic >
				 	<p className="tailletext2">
					 	Système d'Echange Local de la Croix Rouge de Damvillers, 6 rue des Remparts 55150 DAMVILLERS

					 	<br/><br/>
					 	<a href="http://www.twitter.com" target="_blank"> <img className="logo" src='images/TwitterBird.png'/> </a>
  						<a href="http://www.facebook.com" target="_blank"> <img className="logo" src='images/Facebook.png' /> </a>
  						<a href="http://www.croix-rouge.fr" target="_blank"> <img className="logo" src='images/croixrouge.jpg' /> </a>
					 	<br/><br/>
					 	<span id='tailletext'>Création du site par WebOgreen 2017</span>

				 	</p>

  				</Segment>
			</footer>

		);
	}
}
/*
	 <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>

        </div>

        <div class="seven wide column">
          <h4 class="ui inverted header">Footer Header</h4>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </div>
      </div>
    </div>
  </div>
 */
