
import React, {Component} from 'react'
import {  Dropdown } from 'semantic-ui-react'


export default class MenuDeroulant extends Component {
/*import { stateOptions } from '../common'*/
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

constructor(){
	super()
		this.stateOptions = [];
		this.stateTitre = '';
	}
	remplir(donnees,cle){
		var i=0
		donnees.map((donnee)=>{
			if(i>0){
				this.stateOptions.push({ key: donnee, value:donnee, text: donnee })
			}else{
				this.stateTitre=donnee
			}
			i++
		})
	}

	render(){

		if(this.props.donnees){this.remplir(this.props.donnees,this.props.cle)}

		return (
			<Dropdown placeholder={this.stateTitre} search selection options={this.stateOptions} />
		);
	}
}
