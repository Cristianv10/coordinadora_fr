import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage></NotFoundPage>
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
)