import React, {Component} from 'react';
import { Segment, Header, Image,Button, Grid } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

class Act extends Component {
constructor(){
		super();
		this.state={};
	}
	componentWillMount(){
		this.getArticle(this.props.titre)
	}
	/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	getArticle(titre){
		Meteor.call('getArticle',titre,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:err.message,
					type: 'danger'
				})
			}else{
				this.setState(res)

			}
		})
	}

	rnd(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
	bouton(e){
		e.preventDefault()

			var href=""
			var pre = this.props.menu.pre.get()
				if(pre=="Accueil"){href="/"}
				if(pre=="Kesako"){href="/kesako"}
				if(pre=="Annonces"){href="/annonces"}
				if(pre=="Actualites"){href="/actualites"}
				if(pre=="Contact"){href="/contacts"}
				if(pre=="MonCompte"){
					href="/monCompte"
					this.props.menu.pre.set()
				}
				if(pre=="MonCompte"&&this.props.menu.monCompte.get()==true){}else{this.props.menu.monCompte.set(false)}
				if(pre=="LesSelistes"){href="/lesSelistes"}
				if(pre=="Creer un compte"){href="/creerUnCompte"}
				if(pre=="Connexion"){href="/connexion"}

			FlowRouter.go(href)
	}
 render(){
 	return(

		<div>
			<Segment >
				<Grid >
					<Grid.Column width={8} style={{padding:0}}>
						<Image src={'/images/'+this.rnd(1,16)+'.jpg'} style={{height:"200px",width:"200px"}} />
					</Grid.Column>
					<Grid.Column width={8}>

							<Header as='h2'>{this.state.titre}</Header>
							<p>{this.state.description}</p>
					</Grid.Column>
				</Grid>
			</Segment>
			<Button onClick={this.bouton.bind(this)}>Retour</Button>
		</div>
		);
	}
}
export default Actu = createContainer( ()=>{

 	return{
 		menu:{
			pre:menu.pre,
			actif:menu.actif.get(),
			monCompte:menu.monCompte
		},
 	}

 } , Act );
