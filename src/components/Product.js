import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h2 onClick={props.handleView} className="cart">
        Cart
      </h2>
      <h1 onClick={props.handleCart} className="count">
        {props.cart.length}
      </h1>
    </div>
  );
}
