import { Component } from "react";
import Element from "./Element.js";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  change = (val) => {
    this.setState(() => {
      return { message: val };
    });
  };

  render() {
    return (
      <div>
        <Element changeFromChild={this.change} />
        {this.state.message}
      </div>
    );
  }
}

export default Parent;
