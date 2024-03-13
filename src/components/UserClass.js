import React from "react";
import Dummy from "./Dummy";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name, "Child Did Mount");
  }
  render() {
    const { name, location, mbn } = this.props;
    console.log(this.props.name, "Child Render");

    return (
      <div className="user-card">
        <Dummy name="First" id={this.props.id} />
        <Dummy name="Second" id={this.props.id} />
        <h2>{name} </h2>
        <h4>{location} </h4>
        <h5>{mbn} </h5>
      </div>
    );
  }
}

export default UserClass;
