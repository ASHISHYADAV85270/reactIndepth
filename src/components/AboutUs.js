import React from "react";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass name="Palak Yadav" location="Delhi" mbn="12943523u3" />
      </div>
    );
  }
}

export default AboutUs;
