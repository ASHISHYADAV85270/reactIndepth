import { useState, useEffect } from "react";
const useListofRestraurent = () => {
  const [listofRestrau, setListofRestrau] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsondata = await res.json();
      const restaurants =
        jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setListofRestrau(restaurants);
    } catch (error) {
      console.log(error);
    }
  };
  return listofRestrau;
};

export default useListofRestraurent;
