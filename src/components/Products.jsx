import { useContext } from 'react';
import { Product } from '../components/Product';
import { AppContext } from '../context/AppContext';
import '../styles/components/Products.css';

export function Products() {
	const { state: { products }, addToCart } = useContext(AppContext);
	const handleAddToCart = (product) => {
		addToCart(product);
	};

	return (
		<div className="Products">
			<div className="Products-items">
				{
					products?.map(p => {
						return <Product product={p} key={p.id} handleAddToCart={handleAddToCart} />
					})
				}
			</div>
		</div>
	)
};