import { createBrowserRouter } from "react-router";
import MyLayouts from "../Layouts/MyLayouts";
import Home from "../Pages/Home";
import Sdr from "../Pages/Sdr";
import Bdm from "../Pages/Bdm";
import Am from "../Pages/Am";
import Consultancy from "../Pages/Consultancy";
import FinancialM from "../Pages/FinancialM";




const router = createBrowserRouter([
  {
    path: "/",
    Component: MyLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"sdr",
        Component:Sdr,
      },
      {
        path:"bdm",
        Component:Bdm,
      },
      {
        path:"am",
        Component:Am,
      },
      {
        path:"consultancy",
        Component:Consultancy,
      },
      {
        path:"financial",
        Component:FinancialM,
      }
      

    ]
  },
 

  
]);



export default router;