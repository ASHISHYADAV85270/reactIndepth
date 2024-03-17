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
      <h1> {name} </h1>
      <h3> {name} Menu Details</h3>

      <p>Items Available </p>
      <div className="card-container">
        {itemsCard?.map((curr_ele) => {
          return (
            <div key={curr_ele.card.info.id} className="card-list">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  curr_ele.card.info.imageId
                }
              />
              <h4> Dish Name - {curr_ele.card.info.name}</h4>
              <p>Dish category - {curr_ele.card.info.category}</p>
              <p>Dish description - {curr_ele.card.info.description}</p>
              <p>Dish Price - {curr_ele.card.info.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
