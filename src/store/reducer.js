import * as actionTypes from './actions';

const initialState = {
	basketProducts: [],
	basketCount: 0,
	addToBasket: null,
	removeFromBasket:null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT:
			const newProduct = {
				id: action.id,
				name: action.name,
				price: action.age
			}
			return {
				...state,
				basketProducts: state.basketProducts.concat(newProduct)
			}
		case actionTypes.REMOVE_PRODUCT:
			return {
				...state,
				basketProducts: state.basketProducts.filter(product => product.id !== action.personId)
			}
		default:
			return state;
	}
	
};

export default reducer;