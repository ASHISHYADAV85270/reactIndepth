import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import useRestaurants from "../utils/useRestaurants";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resInfo = useRestaurants(resId);

  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, avgRating, cuisines, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemsCard =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards;
  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold font-serif text-red-400 mt-3 ">
        {name}
      </h1>
      <h1 className="text-2xl text-pretty text-center font-extrabold font-serif text-gray-800 mt-3 ">
        Menu Details
      </h1>
      <div className=" p-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {itemsCard?.map((curr_ele) => {
          return (
            <div className="res-card" key={curr_ele?.card?.info?.id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    curr_ele.card.info.imageId
                  }
                  
                  alt="Image not found"
                  className="h-[300px] w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-1 text-lg font-medium text-gray-600">
                {curr_ele?.card?.info?.name}
              </p>
              <p className="mt-1 text-lg font-medium text-red-500">
                {curr_ele?.card?.info?.category}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {curr_ele?.card?.info?.description
                  ?.split("|")[1]
                  ?.split("OR")[0]?
                  .substr(0, 300)}
              </p>
              <p className="mt-1 text-lg font-medium text-red-600">
                Dish Price -{" "}
                {curr_ele?.card?.info?.defaultPrice
                  ? curr_ele?.card?.info?.defaultPrice
                  : "Unknown"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
