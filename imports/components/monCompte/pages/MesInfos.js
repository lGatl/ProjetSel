import React, {Component} from 'react'
import Titre1 from '../Titre1.js'
import Lister from '../Lister.js'



export default class MesInfos extends Component {
	constructor(){
		super()
		this.state={
			mesInfos:[],
			mesSeugnettes:[]
		}


	}
	utConnecte(){

		Meteor.call('utilisateur' ,(err,res)=>{

			if(err){
				console.log("err")
			}else{

				this.setState({mesInfos:[
					{Nom:res.profile.nom},
					{Prenom:res.profile.prenom},
					{Mail:res.emails[0].address},
					{Adresse:res.profile.adresse},
					{Telephonne:res.profile.tel},
					{resp:res.profile.respC},
					{dateVal:res.profile.dateValRespC},
					{note:res.profile.note}
				]})
				this.setState({mesSeugnettes:[
				{solde:res.profile.soldeSeugnette},
				{totalCredit:res.profile.totalCredits},
				{totalDebit:res.profile.totalDebits}
					]})
			}
		})
	}
	componentWillMount(){
		this.utConnecte()

	}
	render(){

		return (


			<div>
				<Titre1 nom="Mes Informations"></Titre1>
				<Lister donnees={this.state.mesInfos}></Lister>
				<Titre1 nom="Mes Seugnettes"></Titre1>
				<Lister donnees={this.state.mesSeugnettes}></Lister>
			</div>

		);
	}
}



