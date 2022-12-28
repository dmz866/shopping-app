import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

export function Header() {
	return (
		<div className="Header">
			<h1 className="Header-title">Shopping App</h1>
			<Link to="/checkout" className="Header-checkout">
				Checkout
			</Link>
		</div>
	)
};
