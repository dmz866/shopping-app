import { Product } from '../components/Product';
import '../styles/components/Products.css';

export function Products({ products }) {
	return (
		<div className="Products">
			<div className="Products-items">
				{
					products?.map(p => {
						return <Product product={p} key={p.id} />
					})
				}
			</div>
		</div>
	)
};