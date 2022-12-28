import '../styles/components/Checkout.css';

export function Checkout() {
	return (
		<div className="Checkout">
			<div className="Checkout-content">
				<h3>Lista de Pedidos:</h3>
				<div className="Checkout-item">
					<div className="Checkout-element">
						<h3>Item name</h3>
						<span>$10</span>
					</div>
					<button type="button">Eliminar</button>
				</div>
			</div>
			<div className="Checkout-sidebar">
				<h3>Precio Total: $100</h3>
				<button type="button">Continuar Pedido</button>
			</div>
		</div>
	)
};