import React, { Component } from 'react'
import ExtraitAnnonce from './ExtraitAnnonce.js'
import Titre from './Titre.js'

export default class MesAnnonces extends Component {

	render() {

		return (
			<div>
				<Titre></Titre>
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



