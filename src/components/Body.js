import { ResCard } from "./ResCard";
import Resdata from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [data, setData] = useState(Resdata);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };
  useEffect(() => {
    setData(
      Resdata.filter((res) => {
        const resName = res.resName.toLowerCase();
        return resName.includes(searchValue);
      })
    );
  }, [searchValue]);

  console.log("Body");
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
            setData(data.filter((res) => res.rating > 4.5));
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {data.map((res) => (
          <ResCard
            resName={res.resName}
            cuisine={res.cuisine}
            rating={res.rating}
            time={res.time}
            imgSrc={res.imgSrc}
            key={res.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};
export { Body };
export default Body;
