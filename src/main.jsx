import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Router';
import FirebaseAuth from './Provider/FirebaseAuth';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <FirebaseAuth>
     <RouterProvider router={router} />
   </FirebaseAuth>
  // </React.StrictMode>,
)
