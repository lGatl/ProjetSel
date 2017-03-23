
	import React, {Component } from 'react';
	import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
	import {mount} from 'react-mounter';

	import {MainLayout} from '../layouts/MainLayout.js';

	import Accueil from '../pages/Accueil.js';
	import Actualites from '../pages/Actualites.js';
	import Annonces from '../pages/Annonces.js';
	import Contacts from '../pages/Contacts.js';
	import Kesako from '../pages/Kesako.js';
	import LesSelistes from '../pages/LesSelistes.js';
	import MonCompte from '../pages/MonCompte.js';
	import CreerUnComptePublic from '../pages/CreerUnComptePublic.js';

	import  Actu from '../components/Actu.js';
	import  AnnonceDesc from '../components/AnnonceDesc.js';



 FlowRouter.route('/', {
	 name: 'accueil',
	 action: function() {
		 mount(MainLayout, {content: <Accueil layout="actu"/>});
	 }
 });

FlowRouter.route('/kesako', {
	 name: 'kesako',
	 action: function() {
		 mount(MainLayout, {content: <Kesako layout="tout"/>});
	 }
 });
FlowRouter.route('/annonces', {
	 name: 'annonces',
	 action: function() {
		 mount(MainLayout, {content: <Annonces layout="actu"/>});
	 }
 });
FlowRouter.route('/actualites', {
	 name: 'actualites',
	 action: function() {
		 mount(MainLayout, {content: <Actualites layout="annonce"/>});
	 }
 });
FlowRouter.route('/contacts', {
	 name: 'contacts',
	 action: function() {
		 mount(MainLayout, {content: <Contacts layout="tout"/>});
	 }
 });
FlowRouter.route('/monCompte', {
	 name: 'monCompte',
	 action: function() {
		 mount(MainLayout, {content: <MonCompte layout="simple"/>});
	 }
 });
FlowRouter.route('/lesSelistes', {
	 name: 'lesSelistes',
	 action: function() {
		 mount(MainLayout, {content: <LesSelistes layout="simple"/>});
	 }
 });
FlowRouter.route('/creerUnCompte', {
	 name: 'creerUnCompte',
	 action: function() {
		 mount(MainLayout, {content: <CreerUnComptePublic layout="simple"/>});
	 }
 });
FlowRouter.route('/articles/:titre', {
	name: 'home',
	action: function (params) {
		mount(MainLayout, { content: <Actu titre={params.titre} layout="simple"/> });
	},
});
FlowRouter.route('/annonces/:titre', {
	name: 'home',
	action: function (params) {
		mount(MainLayout, { content: <AnnonceDesc titre={params.titre} layout="simple"/> });
	},
});

