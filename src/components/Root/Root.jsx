import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Countries from "../Countries/Countries";
// import { IoMoon } from "react-icons/io5";
// import { IoSunny } from "react-icons/io5";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Root = () => {
    // const [dark, setDark] = useState(false);
    // const darkModeHandler = () => {
    //     setDark(!dark);
    //     document.body.classList.toggle("dark");
    // }
    // bg-yellow-500 dark:bg-blue-900
    return (
        <div className="bg-base-100 dark:bg-blue-200">
            {/* <button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button> */}
            <Navbar />
            <Banner />
            <Outlet />
            
            <Footer />
        </div>
    );
};

export default Root;