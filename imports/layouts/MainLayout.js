 import React from 'react';
 import HeaderS from '../components/Header.js';
import Footer from '../components/Footer.js'; //voyez, j'importe mon fameux Footer
import MenuS from '../components/Menu.js';
import { Grid } from 'semantic-ui-react'

 export const MainLayout = ({ content }) => (

   <div className="main-layout">

	<HeaderS></HeaderS>

	<MenuS></MenuS>
	 <Grid>
		<Grid.Column width={13}>
			<div id="content">
			 	{content}
			</div>
		</Grid.Column>
		<Grid.Column width={3}>
		</Grid.Column>
	 </Grid>

    	 <Footer></Footer>{/*et la je dit au Footer de s'inserer ici*/}

   </div>
 );
