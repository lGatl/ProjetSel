import React, {Component} from 'react';
import { Segment, Header, Image,Button } from 'semantic-ui-react'
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


 render(){
 	return(
		<div>
		    <Segment compact>
		    	<Image src='/assets/images/wireframe/image.png' size='small' wrapped />
		      	<Header as='h2'>{this.state.title}</Header>
		      	<p>{this.state.description}</p>

		    </Segment>
		    <Button href="/actualites">Actualités</Button>
		</div>
		);
	}
}
export default Actu = createContainer( ()=>{

 	return{
		setActif:menu.setActif
 	}

 } , Act );
