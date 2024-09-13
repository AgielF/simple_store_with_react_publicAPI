import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ProductsPage from './pages/products.jsx';
import ProfilePage from './pages/profile.jsx';
import DetailProduct from './pages/detailProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>, // Corrected "elemnt" to "element"
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProduct />, // Corrected component naming
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
