import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child Did Mount");
  }
  render() {
    const { name, location, mbn } = this.props;
    console.log("Child Render");

    return (
      <div className="user-card">
        <h2>{name} </h2>
        <h4>{location} </h4>
        <h5>{mbn} </h5>
      </div>
    );
  }
}

export default UserClass;
