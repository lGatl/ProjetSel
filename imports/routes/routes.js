
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
	import  Actu from '../components/Actu.js';
	import  AnnonceDesc from '../components/AnnonceDesc.js';



 FlowRouter.route('/', {
	 name: 'accueil',
	 action: function() {
		 mount(MainLayout, {content: <Accueil />});
	 }
 });

FlowRouter.route('/kesako', {
	 name: 'kesako',
	 action: function() {
		 mount(MainLayout, {content: <Kesako />});
	 }
 });
FlowRouter.route('/annonces', {
	 name: 'annonces',
	 action: function() {
		 mount(MainLayout, {content: <Annonces />});
	 }
 });
FlowRouter.route('/actualites', {
	 name: 'actualites',
	 action: function() {
		 mount(MainLayout, {content: <Actualites />});
	 }
 });
FlowRouter.route('/contacts', {
	 name: 'contacts',
	 action: function() {
		 mount(MainLayout, {content: <Contacts />});
	 }
 });
FlowRouter.route('/monCompte', {
	 name: 'monCompte',
	 action: function() {
		 mount(MainLayout, {content: <MonCompte />});
	 }
 });
FlowRouter.route('/lesSelistes', {
	 name: 'lesSelistes',
	 action: function() {
		 mount(MainLayout, {content: <LesSelistes />});
	 }
 });
FlowRouter.route('/articles/:titre', {
	name: 'home',
	action: function (params) {
		mount(MainLayout, { content: <Actu titre={params.titre} /> });
	},
});
FlowRouter.route('/annonces/:titre', {
	name: 'home',
	action: function (params) {
		mount(MainLayout, { content: <AnnonceDesc titre={params.titre} /> });
	},
});

