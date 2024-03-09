const ResCard = (props) => {
  const { resName, resCuisines, imgId, resCity, resRating } = props;
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imgId
        }
      />
      <h4>{resName}</h4>
      <span>{resCuisines.join("--")}</span>
      <h4>{resRating}⭐️</h4>
      <h4>Located At : {resCity}</h4>
    </div>
  );
};

export { ResCard };
