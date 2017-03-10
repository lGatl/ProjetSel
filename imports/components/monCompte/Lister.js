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
									cle=="resp"?titre="Responsabilité Civile":
									cle=="dateVal"?titre="Date de Validité":""


								if(cle!="note"){return(<List.Item key = {i}>{titre +": "+val}</List.Item>)}
									if(cle=="note"){return(<List.Item key={i}>Note: <Rating icon='star' defaultRating={val} maxRating={4} /></List.Item>)}

					})
					}


					<br/>


				</List>
			</Segment>

		);
	}
}

