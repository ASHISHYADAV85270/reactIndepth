import { useContext } from "react";
import { DarkContext } from "../utils/DarkContext";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../utils/cartSlice";

export const CategoryCard = ({ curr_ele, type = "add" }) => {
  const { isDarkTheme } = useContext(DarkContext);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addToCart(item));
  };
  const handleRemoveItem = (itemsid) => {
    dispatch(removeItem(itemsid));
  };
  return (
    <div className="res-card flex justify-between items-center my-2">
      <div className="flex-col w-2/3 gap-2">
        <p
          className={
            `${isDarkTheme ? "text-gray-600" : ""}` + " text-lg font-extrabold "
          }
        >
          {curr_ele?.card?.info?.name}
        </p>

        <p className=" text-xs font-medium text-red-400 text-wrap">
          {curr_ele?.card?.info?.description?.substr(0, 40)}
        </p>
        <p
          className={
            `${isDarkTheme ? "text-red-500" : ""}` + " text-xs font-medium "
          }
        >
          Dish Price - {curr_ele?.card?.info?.price / 100}
        </p>
      </div>
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-lg bg-gray-200 ">
        {type == "add" ? (
          <button
            className={
              `${
                isDarkTheme
                  ? "text-white bg-black"
                  : "bg-slate-100 text-green-500"
              }` +
              "  absolute bottom-[2px]  left-[30px] cursor-pointer  p-1 rounded-md text-sm "
            }
            onClick={() => handleAddItem(curr_ele)}
          >
            Add +
          </button>
        ) : (
          <button
            className={
              `${
                isDarkTheme
                  ? "text-white bg-black"
                  : "bg-slate-100 text-green-500"
              }` +
              "  absolute bottom-[2px]  left-[30px] cursor-pointer  p-1 rounded-md text-sm "
            }
            onClick={() => handleRemoveItem(curr_ele?.card?.info?.id)}
          >
            Remove
          </button>
        )}

        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            curr_ele.card.info.imageId
          }
          alt="Image not found"
          className="h-full w-full object-cover object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300?text=Food"; // Replace with URL of your fallback image
          }}
        />
      </div>
    </div>
  );
};
const RestaurantCategory = ({
  title,
  itemCards,
  showItems,
  changeShowIndex,
}) => {
  const { isDarkTheme } = useContext(DarkContext);
  return (
    <div className="h-auto flex flex-col justify-center items-center ">
      <div
        className={
          `${
            isDarkTheme
              ? " shadow-gray-400 bg-gray-700 text-slate-200   "
              : " bg-slate-100 text-gray-800  "
          }` +
          " w-1/2 p-4 mx-auto my-1  rounded-md shadow-xl flex justify-between  cursor-pointer text-2xl"
        }
        onClick={() => changeShowIndex()}
      >
        {title} ({itemCards.length}){" "}
        {showItems ? <span>↑</span> : <span>↓</span>}
      </div>
      <div className="w-1/2 p-4  rounded-md ">
        {showItems &&
          itemCards?.map((curr_ele) => {
            return (
              <CategoryCard
                curr_ele={curr_ele}
                key={curr_ele?.card?.info?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
