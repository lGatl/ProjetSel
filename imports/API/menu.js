export const menu={
	actif:new ReactiveVar('Acceuil'),
	setActif:(item)=>{menu.actif.set(item)},
	prop:new ReactiveVar([]),
	pre:new ReactiveVar('Acceuil'),
	monCompte:new ReactiveVar(false)
}
