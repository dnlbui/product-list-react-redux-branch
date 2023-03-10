import "bootstrap/dist/css/bootstrap.css"
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {productsApiSlice} from './features/api/apiSlice'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApiProvider api={productsApiSlice}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);

