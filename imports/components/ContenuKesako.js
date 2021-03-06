import React from 'react'
import { Message, Image, Icon} from 'semantic-ui-react'
import Titre from '../components/Titre.js'

/*Pour la page kesako*/
const ContenuKesako = () => (
	<div>
	<Titre nom="LE SEL C'EST QUOI ?"></Titre>

		  <Message>
			    <p className="ui grid middle centered">
			     	Le principe d’un SEL (Système d’Echange Local) est basé sur le constat que tout individu possède <br/>des compétences,  des moyens ou/et du temps qu’il peut échanger avec les autres sans utiliser d’euros.<br/>
				Le SEL est une association de personnes qui mettent des services, des savoirs et des biens à la disposition des unes et des autres. <br/>
				Les échanges sont valorisés au moyen d’un unité d’échange choisie par les membres du SEL.
			    </p>

			    <div className="ui grid middle centered">
			    <a href="/pdf/cahier_des_charges_SEL_-_Feuille_1.pdf" target="_blank" > <Icon name='file pdf outline' size="big" color='red'/>RÈGLEMENT INTÉRIEUR</a>
				<a href="/pdf/cahier_des_charges_SEL_-_Feuille_1.pdf" target="_blank" > <Icon name='file pdf outline' size="big" color='red'/>CHARTE</a>
				<a href="/pdf/cahier_des_charges_SEL_-_Feuille_1.pdf" target="_blank" > <Icon name='file pdf outline' size="big" color='red'/>FICHE D'INSCRIPTION</a>
		  		</div>

		  </Message>
		  <br/><br/>
<Image centered src='/images/pjsel.jpg'/>


	</div>
)


export default ContenuKesako
