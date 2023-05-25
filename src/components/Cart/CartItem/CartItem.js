import React from "react";
import styles from "./CartItem.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { removeFromCart } from "../../../redux";
import { connect } from "react-redux";
const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>${item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={item.qty} />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
          onClick={() => removeFromCart(item.id)}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
