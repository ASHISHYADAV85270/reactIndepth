import { ResCard } from "./ResCard";
// import Resdata from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestrau, setListofRestrau] = useState([]);
  const [filteredRestrau, setFilteredRestrau] = useState([]); // ! for rendering according to search
  const [filteredbtn, setFilteredbtn] = useState("Top Rated"); // ! for rendering according to top rated
  const [searchtext, setSearchtext] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsondata = await res.json();

      const restaurants =
        jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      setListofRestrau(restaurants);
      setFilteredRestrau(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <ResCard
            resName={res.info.name}
            resCuisines={res.info.cuisines}
            resRating={res.info.avgRating}
            imgId={res.info.cloudinaryImageId}
            key={res.info.id}
            resCity={res.info.areaName}
          />
        ))}
      </div>
    </div>
  );
};
export { Body };
export default Body;
