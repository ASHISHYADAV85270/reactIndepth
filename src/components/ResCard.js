const ResCard = (props) => {
  const { resName, cuisine, rating, time,imgSrc } = props;
  return (
    <div className="res-card">
      <img src={imgSrc} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating}⭐️</h5>
      <h5>{time} minutes</h5>
    </div>
  );
};

export { ResCard };
