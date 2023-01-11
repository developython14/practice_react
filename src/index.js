import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './componant/AboutComponent';
import { LEADERS } from './componant/leaders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },  
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/aboutus",
    element: <About leaders={LEADERS}/>,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
