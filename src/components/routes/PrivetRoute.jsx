/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {users, loading} = useContext(AuthContext);
    if (loading){
        return <span className="loading loading-spinner loading-lg">Loading ...</span>;
    }
    if(users){
        return children;
    }
    console.log(location);
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};


export default PrivetRoute;