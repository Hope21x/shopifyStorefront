import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { createCheckout, fetchCheckout, } from './redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux'
import HomePage from './components/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import Client from "shopify-buy";
import Footer from './components/Footer';





export const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
})


function App() {
  const { checkoutId } = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.checkout_id) {
      dispatch(fetchCheckout(checkoutId))
    } else {
      dispatch(createCheckout())
    }

  }, [dispatch, checkoutId])

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Cart />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products/:handle' element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
