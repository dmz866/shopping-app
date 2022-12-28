import { Products } from '../components/Products';
import initialState from '../initialState';

export function Home() {
	return (
		<div>
			<Products products={initialState.products} />
		</div>
	)
};