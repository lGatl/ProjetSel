import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react'

import MenuMonCompt from '../components/monCompte/MenuMonCompt.js'

import Categories from '../components/monCompte/pages/Categories.js'
import Configuration from '../components/monCompte/pages/Configuration.js'
import DepotDemande from '../components/monCompte/pages/DepotDemande.js'
import DepotOffre from '../components/monCompte/pages/DepotOffre.js'
import GererActu from '../components/monCompte/pages/GererActu.js'
import GererAnnonces from '../components/monCompte/pages/GererAnnonces.js'
import MesDemandes from '../components/monCompte/pages/MesDemandes.js'
import MesInfos from '../components/monCompte/pages/MesInfos.js'
import MesOffres from '../components/monCompte/pages/MesOffres.js'
import MesPropositions from '../components/monCompte/pages/MesPropositions.js'
import MonReleve from '../components/monCompte/pages/MonReleve.js'
import Statistiques from '../components/monCompte/pages/Statistiques.js'


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
					<MesPropositions></MesPropositions>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
