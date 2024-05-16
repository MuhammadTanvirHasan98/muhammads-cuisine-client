import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Gallery from "../Pages/Gallery/Gallery";
import AllFoods from "../Pages/AllFoods/AllFoods";
import ErrorPage from "../Pages/ErrorPage";
import MyOrderedFoods from "../Pages/MyOrderedFoods/MyOrderedFoods";
import MyAddedFoods from "../Pages/MyAddedFoods/MyAddedFoods";
import AddFood from "../Pages/AddFood";
import FoodDetails from "../Pages/FoodDetails";
import PurchaseFood from "../Pages/PurchaseFood";
import UpdateFood from "../Pages/UpdateFood";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allFoods",
        element: <AllFoods />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food/${params.id}`),
      },
      {
        path: "/purchaseFood/:id",
        element: (
          <PrivateRoute>
            <PurchaseFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food/${params.id}`),
      },
      {
        path: "/addedFoods",
        element: <PrivateRoute>
      <MyAddedFoods />
      </PrivateRoute>
         ,
      },
      {
        path: "/updateFood/:id",
        element:  <PrivateRoute>
        <UpdateFood />
      </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food/${params.id}`),
      },
      {
        path: "/orderedFoods",
        element: <PrivateRoute>
        <MyOrderedFoods />
      </PrivateRoute>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
