import React, {Component} from 'react'
import {Segment, Rating,List } from 'semantic-ui-react'



export default class Lister extends Component {
	render(){
		return (

			<Segment>
				<List>
					{
						this.props.donnees.map((donnee,i)=>{
								cle=Object.keys(donnee)[0]
								val=donnee[cle]
									titre=cle
									cle=="resp"?titre="Responsabilité civile":
									cle=="dateVal"?titre="Date de Validité":
									cle=="Prenom"?titre="Prénom":
									cle=="Telephone"?titre="Téléphone":
									cle=="totalCredit"?titre="Total crédit":
									cle=="totalDebit"?titre="Total débit":""


								if(cle!="note"){return(<List.Item key = {i}>{titre +" : "+val}</List.Item>)}
									if(cle=="note"){return(<List.Item key={i}>Note: <Rating icon='star' disabled rating={val} maxRating={5} /></List.Item>)}

					})
					}


					<br/>


				</List>
			</Segment>

		);
	}
}

