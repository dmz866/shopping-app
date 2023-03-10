import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/components/Layout.css';

export function Layout({ children }) {
	return (
		<div className="Main">
			<Header />
			{children}
			<Footer />
		</div>
	)
};
