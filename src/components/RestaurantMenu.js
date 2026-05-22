import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const { resInfo, error, fetchMenu } = useRestaurantMenu(resId);

  if (error) {
    return (
      <div className="menu">
        <h1>Error</h1>
        <p>{error}</p>
        <button onClick={fetchMenu}>Retry</button>
      </div>
    );
  }

  if (resInfo === null) return <Shimmer></Shimmer>

  const { name, cuisines, costForTwoMessage, avgRating, totalRatings, areaName, sla } =
    resInfo?.cards?.[2]?.card?.card?.info || {};


  return (
    <div className="menu">
      <h1>{name || "Restaurant"}</h1>
      {cuisines && <h2>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h2>}
      {costForTwoMessage && <h3>{costForTwoMessage}</h3>}
      {avgRating && <p>Rating: {avgRating} ({totalRatings} ratings)</p>}
      {areaName && <p>Location: {areaName}</p>}
      {sla?.slaString && <p>Delivery Time: {sla.slaString}</p>}
      {!name && <p>Menu details are currently unavailable. Please try again later.</p>}
    </div>
    
  )
}

export default RestaurantMenu