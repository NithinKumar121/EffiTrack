import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { Provider } from 'react-redux';
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom';
import {Login,Signup} from './components/LoginCred/Login'
import EditProfile from './components/ProfilePage/Editprofile';
import Page404 from './components/404Error/404Error';



const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:<Page404/>
    },
    {
      path:'/signup',
      element:<Signup/>,
      errorElement:<Page404/>
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Page404/>
    },
    {
      path:'/profile',
      element:<EditProfile/>,
      errorElement:<Page404/>
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
