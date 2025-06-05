import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import AuthProvide from './Auth/AuthProvide'


// import {GoogleOAuthProvider} from '@react-oauth/google'

// const CLIENT_ID="86317306147-qoivqhn0u9aa2na98hmvdr6goainjrpn.apps.googleusercontent.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <GoogleOAuthProvider clientId={CLIENT_ID}>
  // </GoogleOAuthProvider>
    <AuthProvide>
      <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    </BrowserRouter>
    </AuthProvide>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
