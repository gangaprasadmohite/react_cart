import React from "react";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }

  onCheckout = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitdata = event => {
    alert(this.state.name);
  };

  render() {
    return (
      <form className="forms" onSubmit={this.submitdata}>
        <input
          className="one"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="enter your name"
          onChange={this.onCheckout}
        />
        <br />
        <input
          className="one"
          type="email"
          name="email"
          value={this.state.email}
          placeholder="enter your email"
          onChange={this.onCheckout}
        />
        <br />
        <input
          className="one"
          type="phone"
          name="phone"
          value={this.state.phone}
          placeholder="enter your phone"
          onChange={this.onCheckout}
        />
        <br />
        <select className="one">
          <option value="state">State</option>
          <option value="kr">Karnataka</option>
          <option selected value="guj">
            Gujarat
          </option>
          <option value="mh">Maharashtra</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Checkout;
