
import React, {Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount} from 'react-mounter';

 import {MainLayout} from '../layouts/MainLayout.js';
 import Acceuil from '../pages/Acceuil.js';
 import Actualites from '../pages/Actualites.js';
  import Annonces from '../pages/Annonces.js';
 import Contacts from '../pages/Contacts.js';
  import Kesako from '../pages/Kesako.js';
 import LesSelistes from '../pages/LesSelistes.js';
 import MonCompte from '../pages/MonCompte.js';

 FlowRouter.route('/', {
	 name: 'acceuil',
	 action: function() {
		 mount(MainLayout, {content: <Acceuil />});
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
