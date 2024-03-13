import React from "react";
class Dummy extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.id, this.props.name, "  Dummy Constructor");
  }
  componentDidMount() {
    console.log(this.props.id, this.props.name, "Dummy Did Mount");
  }
  render() {
    console.log(this.props.id, this.props.name, "Dummy Render");
    return (
      <div>
        <h1> Dummy Page</h1>
      </div>
    );
  }
}

export default Dummy;
