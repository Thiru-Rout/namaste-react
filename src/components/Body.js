import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchFilter, setSearchFilter] = useState ("");

  useEffect (() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.944979415129612&lng=77.64989029616117&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json)

    const restaurants =
      json?.data?.cards
        ?.find(
          card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants || []);
    setFilteredRestaurant(restaurants || []);
  };

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? ( <Shimmer> </Shimmer> ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchFilter}
              onChange={(e) => {
                setSearchFilter(e.target.value);
                console.log(setSearchFilter)
              }}
          ></input>
          <button onClick={() => {
            
            const filteredRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchFilter.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurants);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter ((res) => res.info.avgRating > 4.5)
          setListOfRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body