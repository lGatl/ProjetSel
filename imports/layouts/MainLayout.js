 import React from 'react';
 import HeaderS from '../components/Header.js';
import Footer from '../components/Footer.js';
import MenuS from '../components/Menu.js';


 export const MainLayout = ({ content }) => (

   <div className="main-layout">

	<HeaderS></HeaderS>
	<MenuS></MenuS>
	<div id="content">
	 	{content}
	</div>

     <Footer></Footer>

   </div>
 );
