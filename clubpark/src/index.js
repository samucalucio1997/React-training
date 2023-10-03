import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar } from './NavMenu/Navbar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cadastro } from './CadastroCPF/Cadastro';
import {Cnpj} from './CadastroCNPJ/Cnpj'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
    ]
  },
  {
    path:"/cadastro",
    element: <Cadastro />
  },
  {
    path:"/Cnpj",
    element: <Cnpj />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

