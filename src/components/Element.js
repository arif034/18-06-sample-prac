import { Component } from "react";

class Element extends Component {
  render() {
    const mess = "Message from child";
    return <div>{this.props.changeFromChild(mess)}</div>;
  }
}

export default Element;
