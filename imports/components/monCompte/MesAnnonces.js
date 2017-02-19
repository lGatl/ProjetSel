import React, { Component } from 'react'
import ExtraitAnnonce from './ExtraitAnnonce.js'
import Titre1 from './Titre1.js'

export default class MesAnnonces extends Component {

	render() {

		return (
			<div>
				<Titre1></Titre1>
				<ExtraitAnnonce></ExtraitAnnonce>
				<br/>
				<ExtraitAnnonce></ExtraitAnnonce>
				<br/>
				<ExtraitAnnonce></ExtraitAnnonce>
				<br/>
				<ExtraitAnnonce></ExtraitAnnonce>
			</div>
		)
	}
}



