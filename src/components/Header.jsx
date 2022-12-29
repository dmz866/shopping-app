import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Header.css';

export function Header() {
	const { state: { cart } } = useContext(AppContext);

	return (
		<div className="Header">
			<Link to='/'>
				<h1 className="Header-title">Shopping App</h1>
			</Link>
			<Link to="/checkout" className="Header-checkout">
				<FaShoppingBasket />
				{
					cart?.length > 0 && <div className="Header-alert">{cart?.length}</div>
				}
			</Link>
		</div>
	)
};
