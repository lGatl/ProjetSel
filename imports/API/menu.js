export const menu={
	actif:new ReactiveVar('Acceuil'),
	setActif:(item)=>{menu.actif.set(item)}
}
