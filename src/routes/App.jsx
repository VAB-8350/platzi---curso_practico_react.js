import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Checkout from '@pages/Checkout';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAcount from '@pages/CreateAccount';
import Orders from '@pages/Orders';
import '@styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/send-email" element={<SendEmail />} />
        <Route exact path="/new-password" element={<NewPassword />} />
        <Route exact path="/accound" element={<MyAccount />} />
        <Route exact path="/signup" element={<CreateAcount />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Layout>
  </BrowserRouter> 
  );
};

export default App;