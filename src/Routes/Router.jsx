import { createBrowserRouter } from "react-router";
import MyLayouts from "../Layouts/MyLayouts";
import Home from "../Pages/Home";




const router = createBrowserRouter([
  {
    path: "/",
    Component: MyLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      

    ]
  },
 

  
]);



export default router;