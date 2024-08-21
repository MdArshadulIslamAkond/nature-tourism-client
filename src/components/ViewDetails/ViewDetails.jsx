import { FaArrowLeft } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const loaded = useLoaderData();
  const {
    _id,
    spot_name,
    country_name,
    location,
    time,
    cost,
    description,
    seasonality,
    totalVisitor,
    photo,
    user_email,
    user_name,
  } = loaded;
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl text-green-500 font-bold text-center">
        View Details
      </h1>
      <Link to="/">
        <div className="flex items-center gap-4">
          <FaArrowLeft className="dark:text-white" />
          <p className="dark:text-white">Go Back Home</p>
        </div>
      </Link>
      <div className="card bg-[#eeeeee] dark:bg-blue-400 shadow rounded-none mt-8">
        <div className="relative">
          <figure className="px-0 pt-0  ">
            <img
              src={photo}
              alt="Shoes"
              className="object-cover h-[215px] w-full"
            />
          </figure>
          <div className="flex justify-between p-4">
            <div>
              <h1 className="dark:text-white">Country: {country_name}</h1>
              <h1 className="dark:text-white">Seasonality: {seasonality}</h1>
              <h1 className="dark:text-white">
                Tota Visitors PerYear: {totalVisitor}
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <IoTime className="dark:text-green-300" />
                <p className="dark:text-white">
                  {time}days & {time - 1}nights
                </p>
              </div>
              <h1 className="dark:text-white">BD: {cost}TK</h1>
            </div>
          </div>
        </div>

        <div className="card-body items-center  dark:text-white p-3">
          <h2 className="card-title text-green-300">{spot_name}</h2>

          <div className="mt-2 mb-6 dark:text-white">{description}</div>
          <div className="dark:text-white">Location: {location}</div>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
