 import React from 'react';
 import HeaderS from '../components/Header.js';
import Footer from '../components/Footer.js'; //voyez, j'importe mon fameux Footer
import MenuS from '../components/Menu.js';
import DerniereActuAnnonce from '../components/DerniereActuAnnonce.js';
import { Grid } from 'semantic-ui-react'


 export const MainLayout = ({ content }) => {
 	var Contenu=""
 	var Annonce=""
 	var Actu=""
 	if(content.props.layout=="simple"){Contenu=(<div>{content}</div>)}else{
 		if(content.props.layout=="annonce"){Annonce=(<DerniereActuAnnonce titre="annonce"></DerniereActuAnnonce>)}
 		if(content.props.layout=="actu"){Actu=(<DerniereActuAnnonce titre="actu"></DerniereActuAnnonce>)}
 		if(content.props.layout=="tout"){
 			Annonce=(<DerniereActuAnnonce titre="annonce"></DerniereActuAnnonce>)
 			Actu=(<DerniereActuAnnonce titre="actu"></DerniereActuAnnonce>)
 		}
 		Contenu=(
	 		<Grid>
			<Grid.Column width={13}>
				<div id="content">
				 	{content}
				</div>
			</Grid.Column>
			<Grid.Column width={3}>
				{Annonce}
				{Actu}


			</Grid.Column>
		 	</Grid>
		 )
 	}

 	return(

   <div className="main-layout">

	<HeaderS></HeaderS>

	<MenuS></MenuS>

		{Contenu}

    	 <Footer></Footer>

   </div>
 );
}
