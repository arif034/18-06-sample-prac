import { Component } from "react";

class Rerendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mess: "",
      messList: [],
      count: 0
    };
  }

  onChange = (event) => {
    this.setState(() => {
      return { mess: event.target.value };
    });
    this.countRerendering();
  };

  onSubmit = () => {
    this.setState(() => {
      return { messList: [this.state.mess, ...this.state.messList], mess: "" };
    });
  };

  countRerendering = () => {
    this.setState(() => {
      return { count: this.state.count + 1 };
    });
    console.log(this.state.count);
  };

  render() {
    const listMess = this.state.messList.map((item) => <div>{item}</div>);
    return (
      <div>
        <input type="text" value={this.state.mess} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
        {listMess}
      </div>
    );
  }
}

export default Rerendering;
