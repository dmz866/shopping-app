import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Home } from './containers/Home';

import { Checkout } from './containers/Checkout';
import { Information } from './containers/Information';
import { NotFound } from './containers/NotFound';
import { Payment } from './containers/Payment';
import { Success } from './containers/Success';

export function App() {
	return (
		<Layout>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/checkout' element={<Checkout />}></Route>
					<Route path='/checkout/information' element={<Information />}></Route>
					<Route path='/checkout/payment' element={<Payment />}></Route>
					<Route path='/checkout/success' element={<Success />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</Layout>
	);
}