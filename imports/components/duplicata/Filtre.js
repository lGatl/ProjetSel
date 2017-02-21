import React, {Component} from 'react'
import { Dropdown, Button, Icon } from 'semantic-ui-react'

export default class Filtre extends Component {

constructor(){
    super()
        this.stateOptions = [
        { key: '0', value: 'recent', text: '+ récent au - récent' },
        {key: '1', value: 'ancien', text: '- récent au + récent'}
        ]
    }

    render(){

        return (
            <Dropdown placeholder='Trier' search selection options={this.stateOptions} />
        );
    }
}