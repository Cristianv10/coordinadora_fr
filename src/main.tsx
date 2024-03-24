import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import RegistrationPage from './pages/Registration.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage></NotFoundPage>
  },
  {
    path: '/register',
    element: <RegistrationPage/>,
    errorElement: <NotFoundPage></NotFoundPage>
  },
  {
    path: '/login',
    element: <div>Login</div>,
    errorElement: <NotFoundPage></NotFoundPage>
  }

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
)