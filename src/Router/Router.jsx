import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import NewShope from "../component/Shope/NewShope";

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
        path: '/newshope',
        element: <NewShope></NewShope>,
        loader:()=>fetch('product.json')
      }
    ],
  },
]);

export default router;
