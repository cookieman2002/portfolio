import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import IntroPage from './pages/IntroPage';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import Layout from './templates/Layout';
import WebUdviklerPage from './pages/WebudviklerPage';
import GrafikPage from './pages/GrafikPage';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IntroPage />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/webudvikler",
        element: <WebUdviklerPage/>
      },
      {
        path: "/grafik",
        element: <GrafikPage/>
      },
      {
        path: "/søg",
        element: <SearchPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

