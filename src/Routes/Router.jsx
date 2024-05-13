import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Gallery from "../Pages/Gallery/Gallery";





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
       path:'/allFoods',
       element:<AllFoods/>
      },
      {
       path:'/gallery',
       element:<Gallery/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },
]);

export default router;
