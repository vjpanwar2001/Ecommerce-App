import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Layout/Main Files/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Layout/Main Files/Home';
import Shop from './Layout/Main Files/Shop';
import Blogs from './Layout/Main Files/Blogs';
import Contact from './Layout/Main Files/Contact';
import SingleProduct from './Layout/Common Files/SingleProduct';
import Cart from './Layout/Main Files/Cart';
import MainContext from './Layout/Context/MainContext';
let router = createBrowserRouter([
    {
      'path':'/',
      'element':<Home/>
    },
    {
      'path':'/shop',
      'element':<Shop/>
    },
    {
      'path':'/blogs',
      'element':<Blogs/>
    },
    {
      'path':'/cart',
      'element':<Cart/>
    },
    {
      'path':'/contact',
      'element':<Contact  />
    },
    {
      'path':'/shop/:shopname',
      'element':<SingleProduct/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <MainContext>
    <RouterProvider router={router}/>
    </MainContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
