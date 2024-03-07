import { ResCard } from "./ResCard";
import Resdata from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [data, setData] = useState(Resdata);
  const handleChange = (e) => {
    setData(
      data.filter((res) =>
        res.resName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="body">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search here your fav Restraurent"
          onChange={handleChange}
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
