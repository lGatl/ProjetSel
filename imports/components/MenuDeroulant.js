
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
	remplir(donnees){
		this.stateOptions=[]
		donnees.map((donnee,i)=>{
			if(i>0){
				this.stateOptions.push({ key:i, value:donnee, text: donnee })

			}else{
				this.stateTitre=donnee
			}
		})
	}
	test(e){

		if(this.props.etatDrop&&typeof(this.props.id)==='number'){this.props.etatDrop(e,this.props.id)}

	}
	render(){

		if(this.props.donnees){this.remplir(this.props.donnees)}

		return (
			<Dropdown placeholder={this.stateTitre} search selection options={this.stateOptions}  onChange={this.test.bind(this)} />
		);
	}
}
