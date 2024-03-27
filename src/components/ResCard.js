import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
const ResCard = (props) => {
  const { resName, resCuisines, imgId, resCity, resRating } = props;
  const { isDarkTheme } = useContext(UserContext);
  return (
    <div
      className={
        `${`${isDarkTheme ? "text-slate-400" : "text-gray-800"}`}` +
        " res-card hover:animate-pulse"
      }
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imgId
          }
          alt="Image not found"
          className="h-[300px] w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm ">{resName}</h3>
      <p className="mt-1 text-lg font-medium">{resCuisines.join(" , ")}</p>
      <p className="mt-1 text-lg font-medium">{resRating}⭐️</p>
      <p className="mt-1 text-lg font-medium">Located At : {resCity}</p>
    </div>
  );
};
export { ResCard };

//Higher Order Component
// I -> RestaurantCard -> O -> RestaurantCardPromoted

const withPromedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-800 text-white rounded-lg p-2 z-20">
          Recommended
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};
export { withPromedLabel };
