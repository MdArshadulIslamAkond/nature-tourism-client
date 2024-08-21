import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CountriesSpot = () => {
  const countriesSpot = useLoaderData();
  // const {_id,
  //     spot_name,
  //     country_name,
  //     location,
  //     time,
  //     cost,
  //     description,
  //     seasonality,
  //     totalVisitor,
  //     photo,
  //     user_email,
  //     user_name,} = spot;
  return (
    <div>
      <h1>Countries Spot Length:{countriesSpot.length}</h1>
      <div className="grid grid-cols-3 gap-2">
        {countriesSpot.map((country) => (
          <div key={country._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 border">
                <img
                  src={country.photo}
                  alt="Shoes"
                  className="rounded-xl object-cover h-[215px] w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{country.country_name}</h2>
                <div className="mt-8 mb-6">
                  {country.description.length > 200 ? (
                    <p>
                      {country.description.slice(0, 150)}...{" "}
                      <button className="block text-blue-600 font-bold">
                        {" "}
                        Read More
                      </button>
                    </p>
                  ) : (
                    <p>{country.description}</p>
                  )}
                </div>
                <div className="card-actions">
                  <Link to={`/viewSpot/${country._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesSpot;
