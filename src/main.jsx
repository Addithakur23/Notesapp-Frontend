import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import BASE_URL from './config.js'

 const router=createBrowserRouter([{
    path:"/",
    element: <App/>,
    children:[
      {path:"signup",element:<Signup/>},
      {path:"login",element:<Login/>},
      {path:"dashboard",element:<Dashboard/>}

    ]
  }])
createRoot(document.getElementById('root')).render(

  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
