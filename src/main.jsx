import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/HomePage/Home/Home';
import AppointmentPage from './Pages/AppoinmentPage/AppointmentPage';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegisterPage/Register';
import Service from './Pages/ServicesPage/Service';
import Doctor from './Pages/DoctorsPage/Doctor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Appointment',
        element:<AppointmentPage/>
      },
      {
        path:'/Doctors',
        element:<Doctor/>
      },
      {
        path:'/services',
        element:<Service/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
