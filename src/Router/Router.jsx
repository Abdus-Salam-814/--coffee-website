import { createBrowserRouter } from 'react-router-dom'

import App from '../App.jsx'
import ErrorPages from '../Pages/ErrorPage/ErrorPages.jsx'
import MainLayout from '../Layout/MainLayout.jsx'
import Home from '../Pages/Home.jsx'
import Coffes from '../Pages/Coffes.jsx'
import Dashboard from '../Pages/Dashboard.jsx'
import About from '../Pages/About.jsx'


const routers = createBrowserRouter([

   {
          path: '/',
          element:  <MainLayout></MainLayout>,
          errorElement: <ErrorPages></ErrorPages>,
          children:[
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/coffees',
              element: <Coffes></Coffes>

            },
            {
              path: '/Dashboard',
              element: <Dashboard></Dashboard>
            },
            {
              path: '/about',
              element: <About></About> ,
            }
          ]
          
        }
     
])


export {routers}