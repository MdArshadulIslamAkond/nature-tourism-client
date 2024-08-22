import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AllTouristsSport from "../AllTouristsSport/AllTouristsSport";
import AddToristsSpot from "../AddToristsSpot/AddToristsSpot";
import MyList from "../MyList/MyList";
import Login from "../Login/Login ";
import Register from "../Register/Register";
import PrivetRoute from "./PrivetRoute";
import ViewDetails from "../ViewDetails/ViewDetails";
import UpdatePage from "../UpdatePage/UpdatePage";
import AddCountry from "../AddCountry/AddCountry";
import Countryes from "../Countries/Countries";
import Countries from "../Countries/Countries";
import CountriesSpot from "../CountriesSpot/CountriesSpot";

const Router = createBrowserRouter([
  {
    path: "/",
    element: < Root />,
    errorElement: < ErrorPage />,
    children: [
      {
        path: "/",
        element: < Home />,
        loader: ()=> fetch('https://nature-tourism-server-production.up.railway.app/touristsSpots')
      },
      {
        path: "viewSpot/:id",
        element: <PrivetRoute><ViewDetails /></PrivetRoute>,
        loader: ({params}) => fetch(`https://nature-tourism-server-production.up.railway.app/touristsSpots/${params.id}`)
      },
      {
        path: "allToristsSport",
        element: < AllTouristsSport />,
        loader: ()=> fetch('https://nature-tourism-server-production.up.railway.app/touristsSpots')
      },
      {
        path: "addTouristSpot",
        element: <PrivetRoute >< AddToristsSpot /></PrivetRoute>,
      },
      {
        path: "myList",
        element: <PrivetRoute><MyList /></PrivetRoute>,
      },
      {
        path: "myList/updatePage/:id",
        element: <PrivetRoute><UpdatePage/></PrivetRoute>,
        loader: ({params}) => fetch(`https://nature-tourism-server-production.up.railway.app/touristsSpots/${params.id}`)
      },
      {
        path:"countriesSpot/:id",
        element: <CountriesSpot />,
        loader: ({params}) => fetch(`https://nature-tourism-server-production.up.railway.app/countriesSpots/${params.id}`)
      },
      {
        path: "addCountry",
        element: <PrivetRoute><AddCountry /></PrivetRoute>,
      },
      {
        path: "login",
        element: <Login />,
      }, 
      {
        path: "register",
        element: <Register />,
      }
    ],
  },
]);

export default Router;
