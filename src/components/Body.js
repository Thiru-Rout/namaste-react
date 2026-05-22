import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Use mock data instead of API call
    const restaurants = resList.map((item) => ({
      "@type": item["@type"],
      info: item.info,
      analytics: item.analytics,
      cta: item.cta,
      widgetId: item.widgetId,
    }));

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>Looks like you're offline!</h1>;
  }

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer> </Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchFilter}
            onChange={(e) => {
              setSearchFilter(e.target.value);
              console.log(setSearchFilter);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()),
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
