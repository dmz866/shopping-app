import { useState } from "react";
import initialState from '../initialState';

export function useInitialState() {
	const [state, setState] = useState(initialState);
	const addToCart = (payload) => {
		setState({ ...state, cart: [...state.cart, payload] });
	};
	const removeFromCart = (payload) => {
		setState({ ...state, cart: state.cart.filter(i => i.id != payload.id) });
	};
	const addBuyer = (payload) => {
		setState({ ...state, buyer: payload });
	};

	return {
		state,
		addToCart,
		removeFromCart,
		addBuyer
	};
}