 import React from 'react';
 import HeaderS from '../components/Header.js';
import Footer from '../components/Footer.js'; //voyez, j'importe mon fameux Footer
import MenuS from '../components/Menu.js';


 export const MainLayout = ({ content }) => (

   <div className="main-layout">

	<HeaderS></HeaderS>
	<MenuS></MenuS>
	<div id="content">
	 	{content}
	</div>

     <Footer></Footer>{/*et la je dit au Footer de s'inserer ici*/}

   </div>
 );
