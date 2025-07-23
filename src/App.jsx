import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



export default function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter([
    {
      path: "", element: < Layout />, children:[
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },]
  }

  ])

  return (
    <>

      <RouterProvider router={router} ></RouterProvider>

    </>
  )
}

