import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import MesInfos from '../components/monCompte/MesInfos.js'
import MonReleve from '../components/monCompte/MonReleve.js'
import MenuMonCompt from '../components/monCompte/MenuMonCompt.js'

import DepotAnnonce from '../components/monCompte/DepotAnnonce.js'
 import MesAnnonces from '../components/monCompte/MesAnnonces.js'
  import Statistiques from '../components/monCompte/Statistiques.js'
  import Configuration from '../components/monCompte/Configuration.js'
  import Categories from '../components/monCompte/Categories.js'
  import GererActu from '../components/monCompte/GererActu.js'


export default class Moncompte extends Component {
	render(){
		return (

			<div className="">
				<h1>Mon Compte</h1>
				 <Grid>
					 <Grid.Column width={3}>
						<MenuMonCompt></MenuMonCompt> <br/>
						<MenuMonCompt></MenuMonCompt>
					</Grid.Column>

					<Grid.Column width={10}>
					<MesAnonces></MesAnonces>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
