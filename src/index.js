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
import { store } from './componant/redux/configueStore';
import { Provider } from 'react-redux'
import { Counter } from './componant/counter';


const router = createBrowserRouter([ 
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/aboutus",
    element: <About leaders={LEADERS}/>,
  },
  {
    path: "/redux",
    element: <Counter/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
