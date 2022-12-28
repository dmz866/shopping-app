import { createBrowserRouter } from "react-router-dom";
import { Home } from '../containers/Home';

import { Checkout } from '../containers/Checkout';

import { Information } from '../containers/Information';
import { NotFound } from '../containers/NotFound';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';

export const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/checkout", element: <Checkout /> },
	{ path: "/checkout/information", element: <Information /> },
	{ path: "/checkout/payment", element: <Payment /> },
	{ path: "/checkout/success", element: <Success /> },
	{ path: "*", element: <NotFound /> },
]);