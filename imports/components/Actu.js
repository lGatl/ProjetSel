import React, {Component} from 'react';
import { Segment, Header, Image,Button, Grid } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

class Act extends Component {
constructor(){
		super();
		this.state={};
	}

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
	componentWillMount(){
		this.getArticle(this.props.titre)
		this.props.setActif('Actualites')

	}
	rnd(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

 render(){
 	return(


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
		);
	}
}
export default Actu = createContainer( ()=>{

 	return{
		setActif:menu.setActif
 	}

 } , Act );
