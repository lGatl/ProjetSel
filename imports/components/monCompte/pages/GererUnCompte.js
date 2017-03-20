import _ from 'lodash'
import React, { Component } from 'react'
import { Search,Button} from 'semantic-ui-react'
import FormulaireDInscription from '../../FormulaireDInscription.js'
import Titre1 from '../Titre1.js'



export default class SearchExampleStandard extends Component {

	constructor(){
		super()

		this.source=[]
		this.reponse=[]

		this.resetComponent = () => this.setState({ isLoading: false, results: [], value: '',Comp:""})

		this.handleResultSelect = (e, result) =>{
			if(this.state.Comp==""){
				this.setState({ value: result.title, Comp:<FormulaireDInscription action={"editer"} acces={"admin"} remiseA0={this.remiseA0.bind(this)} donnees={this.reponse[result.key]}/>})
			}else{this.setState({Comp:""})}
		}

		this.handleSearchChange = (e, value) => {

				this.setState({ isLoading: true, value, Comp:""})

				setTimeout(() => {
						if (this.state.value.length < 1) return this.resetComponent()

						const re = new RegExp(_.escapeRegExp(this.state.value), 'i')

						const isMatch = (result) => re.test(result.title)

						this.setState({
								isLoading: false,
								results: _.filter(this.source, isMatch),
						})
				}, 500)
		}
		this.RecupUtilisateur=()=>{
			Meteor.call('utilisateurs',(err,res)=>{
				if(err){
					console.log("erreur utilisateurs")
				}else{
					this.reponse=res
					var tab=[]
					this.reponse.map((rep,i)=>tab.push({key:i,title:rep.username}))
					this.source=tab
				}
			})
		}
	}

		componentWillMount() {
				this.resetComponent()
				this.RecupUtilisateur()
		}
		remiseA0(){
			this.resetComponent()
			this.RecupUtilisateur()
		}
		creerCompte(){
			this.setState({ value:"" ,Comp:<FormulaireDInscription action={"creer"} acces={"admin"} remiseA0={this.remiseA0.bind(this)} />})


		}
		bouton(){
			if(this.state.Comp==""){
				return(<Button type='submit' onClick={this.creerCompte.bind(this)}>Creer un Compte</Button>)
			}

		}
		render() {
				const { isLoading, value, results } = this.state

				return (
					<div>
							<Titre1 nom={"Rechercher un utilisateur"}></Titre1>
							<Search
								loading={isLoading}
								onResultSelect={this.handleResultSelect}
								onSearchChange={this.handleSearchChange}
								results={results}
								value={value}
								{...this.props}
							/>

							{this.state.Comp}
							<br/>
							{this.bouton()}

					</div>



				)
		}
}
