
import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
import MenuDeroulant from '../MenuDeroulant.js';

export default class Tableau extends Component {
		constructor(){
		super()

			this.actions=[];
			this.menu=[];
			this.state={menu:[]};
			this.nbl=0
		}
		etatDrop(e,i){
				this.menu[i]=e.target.textContent
				this.setState({menu:this.menu})
				if(this.props.etatDrop){this.props.etatDrop(this.state.menu)}
			}

		componentDidMount(){
			this.setState({menu:this.menu})
		}
	render(){
				this.actions=this.props.donnees.actions
		return (

			<Table className='tableauAction' striped>
				<Table.Header>
					<Table.Row>
						{this.props.donnees.titres.map((titre,i)=><Table.HeaderCell key={i}>{titre}</Table.HeaderCell>)}
						<Table.HeaderCell>Action</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
				{
					this.props.donnees.contenu.map((ligne,i)=>{

						return(

							<Table.Row id={i} key={i}>
								{ligne.map((cellule,j)=><Table.Cell key={j}>{cellule}</Table.Cell>)}
								<Table.Cell> <MenuDeroulant etatDrop={this.etatDrop.bind(this)} donnees={this.actions} id={i}></MenuDeroulant></Table.Cell>
							</Table.Row>
						)
					})
				}

				</Table.Body>
			</Table>

		);
	}
}

