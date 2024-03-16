import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy User",
        avatar_url: "https://avatars.githubusercontent.com/u/123456789?v=4",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/johnpapa");
    const jsondata = await data.json();
    console.log(jsondata);
    this.setState({
      userInfo: jsondata,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        User Card
        <p>{name}</p>
        <p>{location}</p>
        <img src={avatar_url} alt="" width={250} height={250} />
      </div>
    );
  }
}

export default UserClass;
