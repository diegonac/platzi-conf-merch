import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// import './styles/components/app.css';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import CheckoutPage from '../pages/CheckoutPage';
import InformationPage from '../pages/InformationPage';
import PaymentPage from '../pages/PaymentPage';
import SuccessPage from '../pages/SuccessPage';
import NotFoundPage from '../pages/NotFoundPage';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

function AppRouter() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/checkout/information' element={<InformationPage />} />
            <Route path='/checkout/payment' element={<PaymentPage />} />
            <Route path='/checkout/success' element={<SuccessPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default AppRouter;
