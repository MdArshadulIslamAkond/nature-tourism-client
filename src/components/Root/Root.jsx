import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Root = () => {
   
    return (
        <div className="bg-base-100 dark:bg-blue-200">
          
            <Navbar />
            <Banner />
            <Outlet />
            
            <Footer />
        </div>
    );
};

export default Root;