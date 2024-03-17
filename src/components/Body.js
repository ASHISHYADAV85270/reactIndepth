import { ResCard } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListofRestraurent from "../utils/useListofRestraurent";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const listofRestrau = useListofRestraurent();
  const [filteredRestrau, setFilteredRestrau] = useState([]); // ! for rendering according to search
  const [filteredbtn, setFilteredbtn] = useState("Top Rated"); // ! for rendering according to top rated
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    setFilteredRestrau(listofRestrau);
  }, [listofRestrau]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    console.log(onlineStatus);
    return <h1>Looks like you are offline</h1>;
  }

  return listofRestrau.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search here your fav Restraurent"
          value={searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilteredRestrau(
              listofRestrau.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              })
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            if (filteredbtn == "Top Rated") {
              setFilteredRestrau(
                listofRestrau.filter((res) => res?.info?.avgRating > 4.6)
              );
              setFilteredbtn("All Restraurent");
            } else {
              setFilteredRestrau(listofRestrau);
              setFilteredbtn("Top Rated");
            }
          }}
        >
          {filteredbtn}
        </button>
      </div>
      <div className="res-container">
        {filteredRestrau.map((res) => (
          <Link to={"restaurants/" + res.info.id} key={res.info.id}>
            <ResCard
              resName={res.info.name}
              resCuisines={res.info.cuisines}
              resRating={res.info.avgRating}
              imgId={res.info.cloudinaryImageId}
              key={res.info.id}
              resCity={res.info.areaName}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export { Body };
export default Body;
