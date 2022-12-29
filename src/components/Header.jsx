import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

export function Header() {
	return (
		<div className="Header">
			<Link to='/'>
				<h1 className="Header-title">Shopping App</h1>
			</Link>
			<Link to="/checkout" className="Header-checkout">
				<FaShoppingBasket />
			</Link>
		</div>
	)
};
