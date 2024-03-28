import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";
import RestaurantCategory from "./RestaurantCategory";
import { DarkContext } from "../utils/DarkContext";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resInfo = useRestaurants(resId);
  const [showIndex, setShowIndex] = useState(null);
  const { isDarkTheme } = useContext(DarkContext);
  if (!resInfo) {
    return <Shimmer />;
  }

  const name = resInfo?.cards[0]?.card?.card?.text;
  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  return (
    <div className="min-h-[calc(100vh-96px)]">
      <h1 className="text-3xl text-center font-extrabold font-serif text-red-400 mt-3 ">
        {name}
      </h1>
      <h1
        className={
          `${`${isDarkTheme ? "text-slate-400" : "text-gray-800"}`}` +
          " text-2xl text-pretty text-center font-extrabold font-serif  mt-3 "
        }
      >
        Menu Details
      </h1>
      {categories?.map((curr_category, index) => {
        return (
          // This is a controlled component
          <RestaurantCategory
            title={curr_category.card?.card?.title}
            itemCards={curr_category.card?.card.itemCards}
            key={curr_category.card?.card?.title}
            showItems={index === showIndex}
            changeShowIndex={() => {
              if (showIndex === index) {
                setShowIndex(null);
              } else {
                setShowIndex(index);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantDetails;
