import React, {Component} from 'react'

import Titre1 from '../Titre1.js'
import MenuDeroulant from '../../MenuDeroulant.js';
import Tableau from '../Tableau.js'

export default class GererAnnonces extends Component {

	render(){
		return (

			<div>
				<Titre1></Titre1>
				 <MenuDeroulant></MenuDeroulant>
				  <MenuDeroulant></MenuDeroulant>
				   <MenuDeroulant></MenuDeroulant>
				<Tableau></Tableau>
				 <MenuDeroulant></MenuDeroulant>
			</div>

		);
	}
}
