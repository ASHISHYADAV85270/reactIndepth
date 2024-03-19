import { useState } from "react";

const CategoryCard = ({ curr_ele }) => {
  return (
    <div className="res-card flex justify-between items-center my-2">
      <div className="flex-col w-2/3 gap-2">
        <p className=" text-sm font-medium text-gray-600">
          {curr_ele?.card?.info?.name}
        </p>

        <p className=" text-xs font-medium text-red-400 text-wrap">
          {curr_ele?.card?.info?.description?.substr(0, 40)}
        </p>
        <p className=" text-xs font-medium ">
          Dish Price - {curr_ele?.card?.info?.price / 100}
        </p>
      </div>
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-lg bg-gray-200 ">
        <button className="  absolute bottom-[2px]  left-[30px] cursor-pointer bg-slate-100 text-green-500 p-1 rounded-md text-sm ">Add+</button>
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
const RestaurantCategory = ({ title, itemCards }) => {
  const [hideitems, setHideitems] = useState(false);
  return (
    <div className="h-auto flex flex-col justify-center items-center ">
      <div
        className="w-1/2 p-4 mx-auto my-1 shadow-xl rounded-md flex justify-between bg-slate-100 text-gray-800 cursor-pointer"
        onClick={() => {
          setHideitems(!hideitems);
        }}
      >
        {title}({itemCards.length}) <span>⬇</span>{" "}
      </div>
      <div className="w-1/2 p-4  rounded-md ">
        {hideitems &&
          itemCards?.map((curr_ele) => {
            return (
              <CategoryCard
                curr_ele={curr_ele}
                key={curr_ele?.card?.info?.id}
              />
            );
          })}
      </div>
      {/*accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
