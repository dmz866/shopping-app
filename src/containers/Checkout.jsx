import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

export function Checkout() {
	const { state: { cart }, removeFromCart } = useContext(AppContext);
	const handleRemoveFromCart = (product) => {
		removeFromCart(product);
	};
	const calculateTotal = (products) => {
		return products.map(p => p.price).reduce((acc, val) => acc + val, 0);
	};

	return (
		<div className="Checkout">
			<div className="Checkout-content">
				{
					(cart?.length > 0) ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>
				}
				{
					cart.map(product => (
						<div key={product.title} className="Checkout-item">
							<div className="Checkout-element">
								<h4>{product.title}</h4>
								<span>${product.price}</span>
							</div>
							<button type="button" onClick={() => handleRemoveFromCart(product)}>
								<FaTrash></FaTrash>
							</button>
						</div>
					))
				}
			</div>
			{
				cart?.length > 0 &&
				<div className="Checkout-sidebar">
					<h3>Precio Total: ${calculateTotal(cart)}</h3>
					<Link to='/checkout/information'>
						<button type="button">Continuar Pedido</button>
					</Link>
				</div>
			}
		</div>
	)
};