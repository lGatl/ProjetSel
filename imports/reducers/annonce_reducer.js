/*Relatifs aux briefs*/
import {
	GET_BRIEFS, RM_BRIEF, EDIT_BRIEF, GET_BRIEF
} from "../actions/brief_actions";
/*import {
	ADD_BRIEF
} from "../actions/formBrief_actions";
*/
const DEFAULTS = {
	briefs: [],
	brief:{}
};

export default function (  state = DEFAULTS, action ) {
	
	
	switch ( action.type ) {

		case GET_BRIEFS:
		case RM_BRIEF:
		/*innutile : case ADD_BRIEF: voir addBrief dans formBrief_action*/
			return { ...state, briefs: action.payload.liste,  count: action.payload.count };
		break;
		/*state la maj de la liste des briefs à afficher aprés une modif ainsi que le brief qui vient d'etre modifié*/
		case EDIT_BRIEF:
			return { ...state, brief: action.payload.brief };
		break;
		/*state un brief*/
		case GET_BRIEF:
			return { ...state, brief: action.payload };
		break;
		
	}
	return state;
}
