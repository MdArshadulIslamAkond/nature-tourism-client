import { useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";

const AllTouristsSport = () => {
  const allTourSpots = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <h1>This is All Tourists Sport</h1>
      <div className="md:grid grid-cols-3 gap-3">
        {allTourSpots.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSport;
