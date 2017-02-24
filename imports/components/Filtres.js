import React, {Component} from 'react'
import { Dropdown, Button, Icon,Segment } from 'semantic-ui-react'
import MenuDeroulant from '../components/MenuDeroulant.js';


export default class Filtre extends Component {

constructor(){
                super()
                this.categories=["Categories :","Cuisine","Mecanique"]
                this.distances=["Distances :","0-5 km","5-10 km"]
                this.recent=["Les plus recents :","< 1 semaine","< 2 semaines"]
                this.type=["Type offre/demande :","offre","demande"]
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
