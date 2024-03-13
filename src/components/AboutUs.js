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
        <UserClass name="First" location="Delhi" mbn="12943523u3" id="1" />
        <UserClass name="Second" location="Delhi" mbn="12943523u3" id="2" />
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
