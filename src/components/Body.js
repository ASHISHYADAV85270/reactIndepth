import { ResCard, withPromedLabel } from "./ResCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListofRestraurent from "../utils/useListofRestraurent";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { DarkContext } from "../utils/DarkContext";
const Body = () => {
  const listofRestrau = useListofRestraurent();
  const [filteredRestrau, setFilteredRestrau] = useState([]); // ! for rendering according to search
  const [filteredbtn, setFilteredbtn] = useState("Top Rated"); // ! for rendering according to top rated
  const [searchtext, setSearchtext] = useState("");
  const PromotedRestraurent = withPromedLabel(ResCard);
  const { userName, setUserName } = useContext(UserContext);
  const { isDarkTheme } = useContext(DarkContext);

  useEffect(() => {
    setFilteredRestrau(listofRestrau);
  }, [listofRestrau]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Looks like you are offline</h1>;
  }

  return listofRestrau.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={`${isDarkTheme ? "bg-gray-900" : ""}`}>
      <div className="searchbar flex gap-3 p-4">
        <input
          type="text"
          name="restaurant"
          id="restaurant"
          className="block w-96 rounded-md border-0 py-1 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Search here your favourite  Restaurant......"
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
          type="button"
          className="box-border bg-blue-500 hover:bg-transparent hover:border-2  hover:text-blue-500 text-white font-bold py-2 px-4  border-2 border-blue-500 rounded"
        >
          Search
        </button>
        <input
          type="text"
          name="restaurant"
          id="restaurant"
          className="block w-50 rounded-md border-0 py-1 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Change User"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="p-3">
        <button
          onClick={() => {
            if (filteredbtn == "Top Rated") {
              setFilteredRestrau(
                listofRestrau.filter((res) => res?.info?.avgRating > 4.2)
              );
              setFilteredbtn("All Restraurent");
            } else {
              setFilteredRestrau(listofRestrau);
              setFilteredbtn("Top Rated");
            }
          }}
          type="button"
          className="box-border bg-blue-500 hover:bg-transparent hover:border-2  hover:text-blue-500 text-white font-bold py-2 px-4  border-2 border-blue-500 rounded"
        >
          {filteredbtn}
        </button>
      </div>
      <div className=" p-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredRestrau.map((res) => (
          <Link to={"restaurants/" + res.info.id} key={res.info.id}>
            {res.info.avgRating > 4.2 ? (
              <ResCard
                resName={res.info.name}
                resCuisines={res.info.cuisines}
                resRating={res.info.avgRating}
                imgId={res.info.cloudinaryImageId}
                key={res.info.id}
                resCity={res.info.areaName}
              />
            ) : (
              <PromotedRestraurent
                resName={res.info.name}
                resCuisines={res.info.cuisines}
                resRating={res.info.avgRating}
                imgId={res.info.cloudinaryImageId}
                key={res.info.id}
                resCity={res.info.areaName}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export { Body };
export default Body;
