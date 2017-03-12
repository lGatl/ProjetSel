import React, { Component } from 'react'
import DepotAnnonce from '../DepotAnnonce.js'



export default class DepotDemande extends Component {
	constructor(){
		super()
		this.state={type:"demande"}
	}
	render() {

		return (
			<DepotAnnonce type={this.state.type}></DepotAnnonce>
		)
	}
}


