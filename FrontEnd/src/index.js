import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/LoginCred/Login";
import EditProfile from "./components/ProfilePage/Editprofile";
import Page404 from "./components/404Error/404Error";
import UserValid from "./components/usernameValidate/usernameValidation";
import { Analytics } from '@vercel/analytics/react';
import DemoProfile from "./components/ProfilePage/Demoprofile";
import Home from "./components/Dashboard/Home";
import PublicProfile from "./components/publicProfile/PublicProfile";


const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/usernameSearch",
        element:<PublicProfile/>
      },
      {
        path:"usernameSearch/:id",
        element:<Home/>
      },
      {
        path:"profile",
        element:<DemoProfile/>,
      }
    ],
    errorElement: <Page404 />,
  },
  {
    path: "/signup",
    element: <Login page={false} />,
    errorElement: <Page404 />,
  },
  {
    path: "/login",
    element: <Login page={true} />,
    errorElement: <Page404 />,
  },
  {
    path: "/profile",
    element: <EditProfile />,
    errorElement: <Page404 />,
  },
  {
    path: "/validUsername",
    element: <UserValid />,
    errorElement: <Page404 />,
  },
  {
    path: "/admin-vercel-analytics",
    element: <Analytics />,
    errorElement: <Page404 />,
  },
  {
    path:"/demo",
    element:<DemoProfile/>
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
