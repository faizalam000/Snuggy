import React, { use } from "react";
import emptyCart from './cart.gif';
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import {
  addQuantity,
  subQuantity,
  removeItem,
  clearAll,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount).toFixed(2);

  if (!items[0]) {
    
    return (
      <>
         <img src={emptyCart} alt="cart" className="w-60 mx-auto" />
        <h1 className="text-2xl mt-4 font-semibold">Your cart is empty</h1>
      </>
    );
  }
  return (
    <div className="Cart">
      {items.map((element) => {
        return (
          <div className="Cart_Card flex justify-between" key={element.id}>
            <div>
              <p className="Cart_Card_name">{element.name} </p>
              <p>Price: {element.price} ₹</p>
            </div>
            <div className="flex font-medium ">
              {element?.quantity > 1 ? (
                <button
                  className="text-1xl"
                  onClick={() => dispatch(subQuantity(element.id))}
                >
                  <FaMinus />
                </button>
              ) : (
                <button
                  className="text-1xl"
                  onClick={() => dispatch(removeItem(element.id))}
                >
                  <IoTrashBin />
                </button>
              )}

              <div className="text-center text-1xl w-6  ">
                {element.quantity}
              </div>
              <button onClick={() => dispatch(addQuantity(element.id))}>
                <FaPlus />
              </button>
            </div>
          </div>
        );
      })}
      <h2 className="font-semibold text-lg">Total Amount : {totalAmount} ₹</h2>
    </div>
  );
};
export default Cart;
