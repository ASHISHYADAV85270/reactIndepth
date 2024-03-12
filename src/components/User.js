const User = ({ name, location, mbn }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h4>{location}</h4>
      <h5>{mbn}</h5>
    </div>
  );
};

export default User;
