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
      const res = await fetch("https://restaurant-api.dicoding.dev/list");
      const jsondata = await res.json();
      const { restaurants } = jsondata;
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
                return restaurant.name
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
                listofRestrau.filter((res) => res.rating > 4.5)
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
            resName={res.name}
            resDescription={res.description}
            resRating={res.rating}
            imgId={res.pictureId}
            key={res.id}
            resCity={res.city}
          />
        ))}
      </div>
    </div>
  );
};
export { Body };
export default Body;
