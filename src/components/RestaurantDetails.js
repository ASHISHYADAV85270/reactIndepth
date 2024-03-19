import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import useRestaurants from "../utils/useRestaurants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resInfo = useRestaurants(resId);

  if (!resInfo) {
    return <Shimmer />;
  }
  const { name } = resInfo?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold font-serif text-red-400 mt-3 ">
        {name}
      </h1>
      <h1 className="text-2xl text-pretty text-center font-extrabold font-serif text-gray-800 mt-3 ">
        Menu Details
      </h1>
      {categories.map((curr_category,index) => {
   
        return (
          <RestaurantCategory
            title={curr_category.card?.card?.title}
            itemCards={curr_category.card?.card.itemCards}
            key={curr_category.card?.card?.title}
          />
        );
      })}
    </div>
  );
};

export default RestaurantDetails;
