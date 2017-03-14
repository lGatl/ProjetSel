
import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
import MenuDeroulant from '../MenuDeroulant.js';

export default class Tableau1ction extends Component {
		constructor(){
		super()
			this.state={tabl:[]}
			this.tabl=[]
		}

		etatDrop(v,id){
			this.tabl[id]=v
			this.setState({tabl:this.tabl})
			if(this.props.etatDrop){this.props.etatDrop(this.tabl)}
		}
	render(){

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
								<Table.Cell>
									<MenuDeroulant
										texte={""}
										etatDrop={this.etatDrop.bind(this)}
										donnees={this.props.donnees.actions}
										nom={i}
										/>

								</Table.Cell>
							</Table.Row>
						)
					})
				}

				</Table.Body>
			</Table>

		);
	}
}

