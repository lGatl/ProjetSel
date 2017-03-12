import React, { Component } from 'react'
import DepotAnnonce from '../DepotAnnonce.js'



export default class DepotOffre extends Component {
	constructor(){
		super()
		this.state={type:"offre"}
	}



	render() {

		return (
			<DepotAnnonce type={this.state.type}></DepotAnnonce>
		)
	}
}


