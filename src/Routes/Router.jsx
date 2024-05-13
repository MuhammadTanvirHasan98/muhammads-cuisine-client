import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";





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
        
      }
    ]
  },
]);

export default router;
