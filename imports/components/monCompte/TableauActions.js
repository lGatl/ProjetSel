
import React, {Component} from 'react'
import { Table,Select } from 'semantic-ui-react'
import MenuDeroulant from '../MenuDeroulant.js';

export default class TableauAction extends Component {
		constructor(){
		super()

			this.handleChange = (e,{value,id}) => {this.props.etatDrop(id,value)}
		}

		options(opt){
			return(opt.map((op)=>{return({ key:op, value: op, text: op })}))
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

							<Table.Row id={"ligne"+i} key={"ligne"+i}>
								{ligne.tableau.map((cellule,j)=><Table.Cell key={j}>{cellule}</Table.Cell>)}

								<Table.Cell>
									<Select
										id={i}
										key={i}
										label={this.props.donnees.actions}
										options={this.options(this.props.donnees.actions.contenu)}
										onChange={this.handleChange}
										value={ligne.etat}
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

