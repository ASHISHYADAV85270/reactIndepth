import { ResCard } from "./ResCard";
// import Resdata from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestrau, setListofRestrau] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filtered, isFiltered] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };
  useEffect(() => {
    setListofRestrau(
      listofRestrau.filter((res) => {
        const resName = res.name.toLowerCase();
        return resName.includes(searchValue);
      })
    );
  }, [searchValue]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://restaurant-api.dicoding.dev/list");
      const jsondata = await res.json();
      const { restaurants } = jsondata;
      setListofRestrau(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (listofRestrau.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search here your fav Restraurent"
          onChange={handleChange}
          value={searchValue}
        />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListofRestrau(listofRestrau.filter((res) => res.rating > 4.5));
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {listofRestrau.map((res) => (
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
