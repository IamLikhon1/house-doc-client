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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './provider/AuthProvider';

// Create a client
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Appointment',
        element: <AppointmentPage />
      },
      {
        path: '/Doctors',
        element: <Doctor />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
