const ResCard = (props) => {
  const { resName, resDescription, imgId, resCity, resRating } = props;
  return (
    <div className="res-card">
      <img src={"https://restaurant-api.dicoding.dev/images/small/" + imgId} />
      <h4>{resName}</h4>
      <h4>{resDescription.slice(0, 40)}</h4>
      <h4>{resRating}⭐️</h4>
      <h4>Located At : {resCity}</h4>
    </div>
  );
};

export { ResCard };
