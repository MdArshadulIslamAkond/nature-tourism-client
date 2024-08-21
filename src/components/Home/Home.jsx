import { useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";
import { useState } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import Fevorit from "../Fevorit/Fevorit";
import Countries from "../Countries/Countries";

const Home = () => {
  const touristsSpot = useLoaderData();
  const [data, setData] = useState(6);
  return (
    <div className=" mb-6 border">
      <Fevorit />

      <div className="lg:max-w-7xl mx-auto mt-6">
        <div className="flex items-center mt-6">
         
         <div className="w-full">
           <hr className="h-1  bg-green-500" />
         </div>
         <div className="bg-green-500 text-centersm:w-full md:w-2/3 mx-auto mb-8 mt-8 grow">
           <h1 className="text-2xl font-bold text-white p-5">
           Our Packages
           </h1>
         </div>
         <div className="w-full">
           <hr className="h-1  bg-green-500 " />
         </div>
       </div>
        <div className="md:grid grid-cols-3 gap-x-6 gap-y-14 mt-6">
          {touristsSpot.slice(0, data).map((spot) => (
            <SpotCard key={spot._id} spot={spot} />
          ))}
        </div>
        <div
          className={`text-center mt-14 ${
            data === touristsSpot.length && "hidden"
          }`}
        >
          <button
            onClick={() => setData(touristsSpot.length)}
            className="btn w-full  bg-[#EEEEEE] dark:bg-blue-400 dark:text-white"
          >
            <IoMdArrowDropupCircle className="text-xl dark:text-white" />
            Show all Spot
          </button>
        </div>
      </div>
      <Countries />
    </div>
  );
};

export default Home;
