import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Shope from "../Pages/Shope/Shope";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/shope',
        element: <Shope></Shope>,
        loader:()=>fetch('product.json')
      }
    ],
  },
]);

export default router;
