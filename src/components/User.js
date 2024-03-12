import { useState } from "react";

const User = ({ name, location, mbn }) => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("ashish@gmail.com");

  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h3>{email}</h3>
      <h2>{name}</h2>
      <h4>{location}</h4>
      <h5>{mbn}</h5>
    </div>
  );
};

export default User;
