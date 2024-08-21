import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdatePage = () => {
  const  spot = useLoaderData();
  const { users } = useContext(AuthContext);
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
  } = spot;
  // const {user_email,user_name} = user;
  const handleUpdateSopt = (e) => {
    e.preventDefault();
    const formAddSpot = e.currentTarget;
    const form = new FormData(formAddSpot);
    const spot_name = form.get("spot_name");
    const country_name = form.get("country_name");
    const location = form.get("location");
    const time = form.get("time");
    const cost = form.get("cost");
    const description = form.get("description");
    const seasonality = form.get("seasonality");
    const totalVisitor = form.get("totalVisitor");
    const photo = form.get("photo");
    const user_email = users.email;
    const user_name = users.displayName;
    const newSpot = {
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
    };
    console.log(newSpot);

    //send data to the server
    fetch(`http://localhost:5000/touristsSpots/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "success",
            text: "data.message",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-center">Add Torists Spot </h1>
      </div>
      <div className="hero bg-base-200">
        <div className="card w-full">
          <form
            onSubmit={handleUpdateSopt}
            className="card-body p-0 rounded-none"
          >
            <div className="m-4">
            <div className="md:flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tourists_Spot_Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={spot_name}
                    name="spot_name"
                    placeholder="Enter spot name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country_Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={country_name}
                    name="country_name"
                    placeholder="Enter country name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={location}
                    name="location"
                    placeholder="Enter Location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">Travel_Time</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={time}
                    name="time"
                    placeholder="Enter travel_time"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">Average_Cost</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={cost}
                    name="cost"
                    placeholder="Enter average_cost"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seasonality</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={seasonality}
                    name="seasonality"
                    placeholder="Enter seasonality"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">total Visitors Per Year</span>
                </label>
                <input
                  type="number"
                  defaultValue={totalVisitor}
                  name="totalVisitor"
                  placeholder="Enter total Visitors PerYear"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</span>
                </label>
                <input
                  type="text"
                  defaultValue={photo}
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>

              
              <div className="form-control w-full">
                  <label
                    className="label"
                  >
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</span>
                  </label>
                  <textarea
                    id="message"
                    name="description"
                    defaultValue={description}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
             
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Update"
                className="btn btn-primary bg-[#D2B48C]"
              />
              {/* <button className="btn btn-primary bg-[#D2B48C]">Add Coffee</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
