import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

export function Information() {
	const { state: { cart }, addBuyer } = useContext(AppContext);
	const form = useRef(null);
	const navigate = useNavigate();

	const handlePayment = () => {
		const formData = new FormData(form.current);
		const buyer = Object.fromEntries(formData);
		console.log(buyer);
		addBuyer(buyer);
		navigate('/checkout/payment');
	};

	return (
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Informacion de contacto:</h2>
				</div>
				<div className="Information-form">
					<form ref={form}>
						<input type="text" placeholder="Nombre completo" name="name" />
						<input type="text" placeholder="Email" name="email" />
						<input type="text" placeholder="Direccion" name="address" />
						<input type="text" placeholder="Ciudad" name="city" />
						<input type="text" placeholder="Pais" name="country" />
						<input type="text" placeholder="Estado" name="state" />
						<input type="text" placeholder="Codigo Postal" name="zipCode" />
						<input type="text" placeholder="Telefono" name="phoneNumber" />
					</form>
				</div>
				<div className='Information-buttons'>
					<div className='Information-back'>
						<Link to='/checkout'>Regresar</Link>
					</div>
					<div className='Information-next'>
						<button onClick={handlePayment}>Pagar</button>
					</div>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido:</h3>
				{
					cart?.map(product => (
						<div key={product.id} className="Information-item">
							<div className="Information-element">
								<h4>{product.title}</h4>
								<span>${product.price}</span>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
};