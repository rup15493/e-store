import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store/store';
import { CartProvider } from './context/cart.context';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";



const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
          </Elements>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);

serviceWorkerRegistration.register();