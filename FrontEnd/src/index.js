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
const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
    },
    {
      path:'/signup',
      element:<Signup/>,
    },
    {
      path:'/login',
      element:<Login/>,
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
