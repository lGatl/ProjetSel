import React, {Component} from 'react'
import { Dropdown, Button, Icon,Segment } from 'semantic-ui-react'
import MenuDeroulant from '../components/MenuDeroulant.js';


export default class Filtres extends Component {

constructor(){
                super()
                this.categories={titre:"Categories :",contenu:["Cuisine","Mecanique"]}
                this.distances={titre:"Distances :",contenu:["0-5 km","5-10 km"]}
                this.recent={titre:"Les plus recents :",contenu:["< 1 semaine","< 2 semaines"]}
                this.type={titre:"Type offre/demande :",contenu:["offre","demande"]}
            }

    render(){

        return (
         <Segment>
                    <MenuDeroulant donnees={this.categories}></MenuDeroulant>
                    <MenuDeroulant donnees={this.distances}></MenuDeroulant>
                    <MenuDeroulant donnees={this.recent}></MenuDeroulant>
                    <MenuDeroulant donnees={this.type}></MenuDeroulant>
                </Segment>
        );
    }
}
