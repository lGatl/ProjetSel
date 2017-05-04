
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
	import Connexion from '../pages/Connexion.js'

	import  Actu from '../components/Actu.js';
	import  AnnonceDesc from '../components/AnnonceDesc.js';
	import {menu} from '../API/menu.js'



 FlowRouter.route('/', {
	 name: 'accueil',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('Accueil')
		 mount(MainLayout, {content: <Accueil layout="actu"/>});

	 }
 });

FlowRouter.route('/kesako', {
	 name: 'kesako',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('Kesako')
		 mount(MainLayout, {content: <Kesako layout="tout"/>});
	 }
 });
FlowRouter.route('/annonces', {
	 name: 'annonces',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('Annonces')
		 mount(MainLayout, {content: <Annonces layout="actu"/>});
	 }
 });
FlowRouter.route('/actualites', {
	 name: 'actualites',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('Actualites')
		 mount(MainLayout, {content: <Actualites layout="annonce"/>});
	 }
 });
FlowRouter.route('/contacts', {
	 name: 'contacts',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('Contact')
		 mount(MainLayout, {content: <Contacts layout="tout"/>});
	 }
 });
FlowRouter.route('/monCompte', {
	 name: 'monCompte',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('MonCompte')
		 mount(MainLayout, {content: <MonCompte layout="simple"/>});
	 }
 });
FlowRouter.route('/lesSelistes', {
	 name: 'lesSelistes',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('LesSelistes')
		 mount(MainLayout, {content: <LesSelistes layout="simple"/>});
	 }
 });
FlowRouter.route('/creerUnCompte', {
	 name: 'creerUnCompte',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('Creer un compte')
		 mount(MainLayout, {content: <CreerUnComptePublic layout="simple"/>});
	 }
 });
FlowRouter.route('/connexion', {
	 name: 'connexion',
	 action: function() {
	 	menu.pre.set(menu.actif.get())
	 	menu.actif.set('Connexion')
		 mount(MainLayout, {content: <Connexion layout="simple"/>});
	 }
 });
FlowRouter.route('/articles/:titre', {
	name: 'actualites',
	action: function (params) {
		menu.pre.set(menu.actif.get())
		menu.actif.set('Actualites')
		mount(MainLayout, { content: <Actu titre={params.titre} layout="annonce" /> });
	},
});
FlowRouter.route('/annonces/:titre', {
	name: 'annonces',
	action: function (params) {
		menu.pre.set(menu.actif.get())
		menu.actif.set('Annonces')
		mount(MainLayout, { content: <AnnonceDesc titre={params.titre} layout="actu" /> });
	},
});


