import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
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
  } = spot;
  return (
    <div>
      <div className="card bg-[#eeeeee] dark:bg-blue-400 shadow rounded-none">
        <div className="relative">
        <figure className="px-0 pt-0  ">
          <img
            src={photo}
            alt="Shoes"
            className="object-cover h-[215px] w-full"
          />
        </figure>
        <div className="absolute bottom-3 right-6 text-white">
          <div className="flex items-center gap-1">
          <IoTime />
          <p>{time}days & {time-1}nights</p>
          </div>
          <h1>BD: {cost}TK</h1>
        </div>
        </div>
        
        <div className="card-body items-center  dark:text-white p-3">
          <h2 className="card-title">{spot_name}</h2>
          <div className="mt-2 mb-6">
            {description.length > 100 ? (
              <p>
                {description.slice(0, 100)}...{" "}
                {/* <Link
                  to={`/viewSpot/${_id}`}
                  className="block text-blue-600 font-bold dark:text-white"
                > */}
                  {/* Read More */}
                {/* </Link>{" "} */}
              </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="card-actions">
            <Link to={`/viewSpot/${_id}`}>
              <button className="btn btn-primary dark:text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
