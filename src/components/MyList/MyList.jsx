import { Link, useLocation } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { MdDelete, MdEdit } from "react-icons/md";

const MyList = () => {
  const [mylists, setMylists] = useState();
  const [number, setNumber] = useState(0);
  const { loading } = useContext(AuthContext);
  const url = useLocation();
  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg">Loading ...</span>
    );
  }
  useEffect(() => {
    fetch(`http://localhost:5000/touristsSpots/myList${url.search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMylists(data);
      });
  }, [url]);

  console.log(url);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristsSpots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: data.message,
                icon: "success",
              });
              const remaining = mylists.filter((list) => list._id !== id);
              setMylists(remaining);
            }
          });
      }
    });
  };
  const count = () => {
    setNumber((prev) => prev + 1);
  };
  let xyz;
  return (
    <div className=" dark:bg-blue-500 pb-8">
      <div className="lg:max-w-7xl mx-auto">
      <h1 className="text-2xl text-green-400 text-center mb-8">
        This is My List
      </h1>

      <div className="">
        {/* //   <SpotCard key={list._id} spot={list} /> */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* <th></th> */}
                <th className="dark:text-white">Tourists Spot Name</th>
                <th className="dark:text-white">Country</th>
                <th className="dark:text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {mylists?.map((list) => (
                <tr key={list._id}>
                  {/* <th>{number}</th> */}
                  <td className="dark:text-white">{list.spot_name}</td>
                  <td className="dark:text-white">{list.country_name}</td>
                  <td className="flex gap-2 ">
                    <Link to={`updatePage/${list._id}`}>
                      <button className="btn bg-[#3C393B] btn-square">
                        <MdEdit className="text-xl text-white" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(list._id)}
                      className="btn bg-[#EA4744] btn-square"
                    >
                      <MdDelete className="text-xl text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyList;
