 import React from 'react';
 import HeaderS from '../components/Header.js';
import Footer from '../components/Footer.js'; //voyez, j'importe mon fameux Footer
import MenuS from '../components/Menu.js';
import DerniereActuAnnonce from '../components/DerniereActuAnnonce.js';
import { Grid,Segment } from 'semantic-ui-react'


 export const MainLayout = ({ content }) => {

 	var Contenu=""
 	var Annonce=""
 	var Actu=""
 	if(content.props.layout=="simple"){Contenu=(<Grid><Grid.Column><div>{content}</div></Grid.Column></Grid>)}else{
 		if(content.props.layout=="annonce"){Annonce=(<DerniereActuAnnonce titre="Annonces"></DerniereActuAnnonce>)}
 		if(content.props.layout=="actu"){Actu=(<DerniereActuAnnonce titre="Actualités"></DerniereActuAnnonce>)}
 		if(content.props.layout=="tout"){
 			Annonce=(<DerniereActuAnnonce titre="Annonces"></DerniereActuAnnonce>)
 			Actu=(<DerniereActuAnnonce titre="Actualités"></DerniereActuAnnonce>)
 		}
 		Contenu=(
	 		<Grid>
			<Grid.Column mobile={16} tablet={13} computer={13}>
				<div id="content">
				 	{content}
				</div>
			</Grid.Column>
			<Grid.Column  mobile={16} tablet={3} computer={3} >
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
			<div className="fixFoot">
			</div>
    	 <Footer></Footer>

   </div>

 );

}
