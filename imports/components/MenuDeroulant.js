
import React, {Component} from 'react'
import {  Select} from 'semantic-ui-react'


export default class MenuDeroulant extends Component {

	constructor(){
		super()

		this.state={
			titre:"",
			valeur:"",
			contenu:[],
			nom:""
		}
		this.handleChange = (e,{value}) =>this.etatDrop(value)


	}
	etatDrop(val){
			 if(this.props.etatDrop){this.props.etatDrop(val,this.state.nom)}
			 this.setState({valeur:val})
	}

	componentWillMount(){

		var contenu =[]
		this.props.donnees.contenu.map((conten,i)=>{
			contenu.push({ key:i, value: conten, text: conten })
		})

		this.setState({
			titre:this.props.donnees.titre,
			valeur:"",
			nom:this.props.nom,
			contenu:contenu
		})
		if(this.props.val){this.setState({valeur:this.props.val})}
	}
	componentDidMount(){
			this.props.etat={valeur:this.state.valeur,id:this.state.nom}
		}
	render(){
		return (
			<Select
				label={this.state.titre}
				options={this.state.contenu}
				placeholder={this.state.titre}
				onChange={this.handleChange}
				value={this.state.valeur}
			/>
		);
	}
}
