import * as actionTypes from './actions';

const initialState = {
	basketProducts: [],
	basketCount: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT:
			const { id, name, price } = action;
			localStorage.setItem(id, JSON.stringify({ id, name, price }));
			return {
				...state,
				basketProducts: state.basketProducts.concat({ id, name, price }),
				basketCount: state.basketCount + 1
			}
		case actionTypes.REMOVE_PRODUCT:
			localStorage.removeItem(action.id);
			return {
				...state,
				basketProducts: state.basketProducts.filter(product => product.id !== action.id),
				basketCount: state.basketCount - 1
			}
		case actionTypes.LOAD_PRODUCTS:
			const basketProducts = Object.keys(localStorage).sort().map(productId => JSON.parse(localStorage.getItem(productId)));
			return {
				...state,
				basketProducts: basketProducts,
				basketCount: basketProducts.length
			}
		default:
			return state;
	}

};

export default reducer;