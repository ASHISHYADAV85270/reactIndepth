import React from "react";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass />
      </div>
    );
  }
}

export default AboutUs;

/*
Parent Constructor
Parent Render
First  Constructor
First Render
Dummy Constructor
Dummy Render
Dummy Constructor
Dummy Render
Dummy Did Mount
Dummy Did Mount
Second  Constructor
Second Render
Dummy Constructor
Dummy Render
Dummy Constructor
Dummy Render
Dummy Did Mount
Dummy Did Mount
Second component didMount
First component didMount
Parent component did Mount
*/
