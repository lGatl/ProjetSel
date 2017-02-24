import React, {Component} from 'react'

import { Dropdown, Button, Form, Input, TextArea,Icon} from 'semantic-ui-react'

import Titre1 from '../Titre1.js'
import Titre2 from '../Titre2.js'
import MenuDeroulant from '../../MenuDeroulant.js';

import Tableau from '../Tableau.js'

export default class GererActu extends Component {
	constructor(){
		super()
			this.state={
			articles:[],
			article:{}
		}
		this.nvlArticle={
			title:"",
			description:""
		}

		this.actions=["Actions","Editer","Desactiver"]
		this.stateOptions = [ { key: '0', value: '0', text: 'Alabama' },{ key: '1', value: '1', text: 'Alabama' }  ]
	}

viderInput(){
			this.nvlArticle={
			title:"",
			description:""
		}
			document.getElementsByClassName('inputAj')[0].getElementsByTagName('input')[0].value=""
			document.getElementsByClassName('inputAj')[1].getElementsByTagName('textarea')[0].value=""

	}

	miseEnVarDes(e){
		e.preventDefault();
		this.nvlArticle.description=e.target.value

	}
	miseEnVarTitre(e){
		e.preventDefault();
		this.nvlArticle.title=e.target.value
	}

	ajoutArticle(e){
		e.preventDefault();
		if(this.nvlArticle.titre=="" || this.nvlArticle.description==""){
			console.log("remplir les champs")
		}else{
			Meteor.call('ajoutArticle', this.nvlArticle ,(err,res)=>{
				if(err){
					console.log('aye!')
				}else{
					this.viderInput()
				}
			})
		}
	}


	render(){
		return (


			<div>
				<Titre1 nom="Liste des Articles"></Titre1>
				 <MenuDeroulant donnees={this.actions}></MenuDeroulant>
				<Tableau></Tableau>
				<Titre2 nom="Ajouter un Nouvel Article"></Titre2>
				<Form onSubmit={this.handleSubmit}>


					<Form.Input className="inputAj"  label="Titre de l'article" name='titreDeLArticle' placeholder='Choisissez un titre'  onChange={this.miseEnVarTitre.bind(this)}/>

					<Form.TextArea className="inputAj"  name='DescriptionDeLArticle' label="description de l'article" placeholder="Decrire l'article" rows='3' onChange={this.miseEnVarDes.bind(this)} />
					<h4>Inserer une piece jointe</h4>
					<br/>
					<Icon size ='huge' name='camera'/>
    					<Icon size ='huge'  name='paste'  />
					<br/>
					<br/>
					<Button type='Envoyer' onClick={this.ajoutArticle.bind(this)}>Creer</Button>

				</Form>
			</div>

		);
	}
}
