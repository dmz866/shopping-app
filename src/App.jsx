import { RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { router } from './routes/routes';

export function App() {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}