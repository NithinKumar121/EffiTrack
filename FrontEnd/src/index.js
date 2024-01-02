import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { Provider } from 'react-redux';
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom';
import Signup from './components/LoginCred/Signup';
import Login from './components/LoginCred/Login'
import Error from './components/Error.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:<Error/>
    },
    {
      path:'/signup',
      element:<Signup/>,
      errorElement:<Error/>
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Error/>
    }
  ]
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={appRouter}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
