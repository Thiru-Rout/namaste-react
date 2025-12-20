const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRatingString} stars</h4>

      <h4>{resData.info.availability.nextCloseTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard;