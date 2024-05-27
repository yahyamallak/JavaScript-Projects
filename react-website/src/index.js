import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import AddProduct from './pages/AddProduct/AddProduct';
import Products from './pages/Products/Products';
import EditProduct from './pages/EditProduct/EditProduct';
import DeleteProduct from './pages/DeleteProduct/DeleteProduct';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Products/>},
      {
          path: "product/add",
          element: <AddProduct/>
      },
      {
          path: "product/edit/:id",
          element: <EditProduct/>
      },
      {
          path: "product/delete/:id",
          element: <DeleteProduct/>
      },
      {
        path: "login",
        element: <Login />
    },
    {
      path: "register",
      element: <Register/>
  },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
