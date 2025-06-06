import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import AuthProvide from './Auth/AuthProvide'
import {GoogleOAuthProvider} from '@react-oauth/google'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_SECRET_KEY_CLIENT_ID}>
    <AuthProvide>
      <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    </BrowserRouter>
    </AuthProvide>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
