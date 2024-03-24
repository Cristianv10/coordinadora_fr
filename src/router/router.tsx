
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/register',
    element: <RegistrationPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/login',
    element: <LoginPage/>,
    errorElement: <NotFoundPage />
  },
  {
    path: '/login',
    element: <LoginPage/>,
    errorElement: <NotFoundPage />
  },
  {
    path: '/home',
    element: <HomePage/>,
    errorElement: <NotFoundPage />
  }

]);