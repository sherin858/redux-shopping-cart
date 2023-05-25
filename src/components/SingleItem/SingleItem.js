import React from "react";
import styles from "./SingleItem.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux";
const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={currentItem.image}
        alt=""
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{currentItem.title}</p>
        <p className={styles.details__description}>
          {currentItem.details__description}
        </p>
        <p className={styles.details__price}>${currentItem.price}</p>

        <button
          className={styles.details__addBtn}
          onClick={() => addToCart(currentItem.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
