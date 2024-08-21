import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const ErrorPage = () => {
    return (
        <div>
           <div className="flex justify-center mt-14 mb-24">
            <Link to='/' className="flex items-center space-x-4 py-2">
                <FaArrowLeft /> <span className="">Back to home</span>
             </Link>
            </div>
            <img className="mx-auto w-3/4 h-[800px]" src="/src/assets/image/404/404.gif" alt="" />
        </div>
    );
};

export default ErrorPage;