import React from "react";
import { render } from "react-dom";
import data from "./data.json";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Checkout from "./Components/Checkout";
import "./style/main.scss";

function Cart(props) {
  console.log(props.cart);
  return (
    <>
      <div>
        {props.cart.map(item => (
          <div className="all">
            <p className="item1">{item.title}</p>
            <p className="item2">{item.price}</p>
          </div>
        ))}
        <h3 className="total">
          total $
          {props.cart.reduce((acc, val) => {
            return (acc += val.price);
          }, 0)}
        </h3>
        <button className="btn" onClick={props.checkout}>
          Checkout
        </button>
      </div>
    </>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      activepage: "products"
    };
  }
  handleaddtocart = item => {
    this.setState({ cart: this.state.cart.concat(item) });
    console.log(this.state.cart);
  };

  handleCart = () => {
    this.setState({ activepage: "cart" });
    return <Cart cart={this.state.cart} />;
  };
  handleView = () => {
    this.setState({ activepage: "products" });
  };
  handleCheckout = () => {
    this.setState({ activepage: "checkout" });
  };

  handleSwitch = () => {
    switch (this.state.activepage) {
      case "products":
        return (
          <ul>
            {data.products.map(product => (
              <Product {...product} addtocart={this.handleaddtocart} />
            ))}
          </ul>
        );
        break;
      case "cart":
        return <Cart cart={this.state.cart} checkout={this.handleCheckout} />;
        break;
      case "checkout":
        return <Checkout />;
        break;
      default:
        return <h2>Page not found!</h2>;
    }
  };

  render() {
    return (
      <div>
        <Header
          cart={this.state.cart}
          handleCart={this.handleCart}
          handleView={this.handleView}
        />
        {this.handleSwitch()}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));