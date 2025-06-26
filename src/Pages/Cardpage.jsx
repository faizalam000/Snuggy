import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoTrashBin } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  addQuantity,
  removeItem,
  subQuantity,
} from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CardPage = () => {
  const { state: cardData } = useLocation();

  if (!cardData) {
    return <h1>no data</h1>;
  }

  const cartItem = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="Cardpage">
      <div className="flex flex-wrap justify-around w-full ">
        <div className="ml-10">
          <h1 className="text-8xl font-semibold" id="restrant">
            {cardData?.name}
          </h1>
          <h3 id="foodName">cuisines: {cardData?.cuisines.join(" ")}</h3>
          <h3 id="rating">rating: {cardData?.rating}</h3>
          <h3>{cardData?.offer}</h3>
          <h3>Deliver in {cardData?.time} order now!</h3>
        </div>
        <img className="Cardpage_img" src={cardData?.image} />
      </div>

      <div className="Cardbox_container">
        {Object.entries(cardData.items).map(([category, item], i) => {
          return (
            <div key={i}>
              <div className="Cardbox_header">{category}</div>
              {item.map((ele) => {
                const cartItemQty = cartItem.find((item) => item.id === ele.id);
                return (
                  <div className="Cardbox" key={ele.id}>
                    <div>
                      <p className="Cardbox_name">{ele.name} </p>
                      <p>price: {ele.price} ₹ </p>
                    </div>
                    {cartItemQty?.quantity > 0 ? (
                      <div className="flex font-medium ">
                        {cartItemQty?.quantity > 1 ? (
                          <button
                            className="text-1xl"
                            onClick={() => dispatch(subQuantity(ele.id))}
                          >
                            <FaMinus />
                          </button>
                        ) : (
                          <button
                            className="text-1xl"
                            onClick={() => dispatch(removeItem(ele.id))}
                          >
                            <IoTrashBin />
                          </button>
                        )}
                        <div className="text-center text-1xl w-6  ">
                          {cartItemQty?.quantity}
                        </div>
                        <button onClick={() => dispatch(addQuantity(ele.id))}>
                          <FaPlus />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="Cardbox_button font-semibold"
                          onClick={() => addCart(ele)}
                        >
                          Add
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardPage;
