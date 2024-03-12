import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      email: "palak@gmail.com",
    };
  }

  render() {
    const { name, location, mbn } = this.props;
    const { count, email } = this.state;
    return (
      <div className="user-card">
        <h1> {this.state.count} </h1>
        <h1> {count} </h1>
        <h1> {this.state.email} </h1>
        <h1> {email} </h1>

        <h2>{name} </h2>
        <h4>{location} </h4>
        <h5>{mbn} </h5>

        <button onClick={() => {}}>Count Increase</button>
      </div>
    );
  }
}

export default UserClass;
