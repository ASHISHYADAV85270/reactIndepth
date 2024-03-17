import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurants = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsondata = await data.json();
    setResInfo(jsondata.data);
  };

  return resInfo;
};

export default useRestaurants;
