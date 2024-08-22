import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // const countries = useLoaderData();
  //   const { country_name, photo, description } = countriess;
  useEffect(() => {
    fetch("https://nature-tourism-server-production.up.railway.app/countriess")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="bg-[#eeeeee] dark:bg-blue-500 mt-6">
      <div className="lg:max-w-7xl mx-auto pb-12">
        <div className="flex items-center mt-8">
         
          <div className="w-full">
            <hr className="h-1  bg-green-500" />
          </div>
          <div className="bg-green-500 text-centersm:w-full md:w-2/3 mx-auto mb-8 mt-8 grow">
            <h1 className="text-2xl font-bold text-white p-5">
              Our Tour Countries
            </h1>
          </div>
          <div className="w-full">
            <hr className="h-1  bg-green-500 " />
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-x-5 gap-y-8">
          {countries.map((country) => (
            <div key={country._id}>
              <div className="card bg-white dark:bg-blue-200 rounded-none">
                <Link to={`/countriesSpot/${country.country_name}`}>
                  <figure className="px-0 pt-0 rounded-none">
                    <img
                      src={country.photo}
                      alt="Shoes"
                      className="object-cover h-[215px] w-full"
                    />
                  </figure>
                  <div className="card-body items-center text-center dark:text-white p-3">
                    <h2 className="card-title">{country.country_name}</h2>
                    <div className="mt-2 mb-5">
                      {country.description.length > 80 ? (
                        <p>
                          {country.description.slice(0, 80)}...{" "}
                          <button className="block text-blue-600 font-bold dark:text-white">
                            {" "}
                            Read More
                          </button>
                        </p>
                      ) : (
                        <p>{country.description}</p>
                      )}
                    </div>
                    {/* <div className="card-actions">
                    </div> */}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
