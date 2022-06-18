import { Component } from "react";
import ListElement from "./ListElement.js";

class ListParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      itemList: []
    };
  }

  onChange = (event) => {
    this.setState(() => {
      return { item: event.target.value };
    });
  };

  onSubmit = () => {
    this.setState(() => {
      return {
        itemList: [this.state.item, ...this.state.itemList],
        item: ""
      };
    });
  };

  render() {
    const elementList = this.state.itemList.map((element) => (
      <ListElement element={element} />
    ));
    return (
      <div>
        <input type="text" value={this.state.item} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
        {elementList}
      </div>
    );
  }
}

export default ListParent;
