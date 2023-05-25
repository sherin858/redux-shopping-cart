import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const Cart = ({ cart }) => {
  const [cartSummary, setCartSumary] = useState({});
  useEffect(() => {
    let count = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      count += item.qty;
      totalPrice += item.qty * item.price;
    });
    setCartSumary({ count, totalPrice });
  }, [cart]);
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: {cartSummary.count}</span>
          <span>${cartSummary.totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
