
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import RegistrationPage from '../pages/Registration';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/register',
    element: <RegistrationPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/login',
    element: <div>Login</div>,
    errorElement: <NotFoundPage />
  }
]);