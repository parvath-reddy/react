import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Login'

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'services', element: <Services /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App