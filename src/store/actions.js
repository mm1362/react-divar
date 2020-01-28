const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addToBasket({ id, name, price }) {
	localStorage.setItem(id, JSON.stringify({ id, name, price }));
	
	this.loadBasket();
}
export function loadBasket() {
	const basketProducts = Object.keys(localStorage).sort().map(productId => JSON.parse(localStorage.getItem(productId)));
	this.setState({ basketProducts: basketProducts, basketCount: basketProducts.length });
}
export function removeFromBasket(productId) {
	console.log('hello', productId);

	localStorage.removeItem(productId);
	this.loadBasket();
}