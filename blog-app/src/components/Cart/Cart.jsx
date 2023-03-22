import React, { useContext } from "react";
import { ContextProvider } from "../Context";
import {FiDelete} from "react-icons/fi"

export const Cart = () => {
  const { cartItems } = useContext(ContextProvider);
  return (
    <div className="md:mt-[20px] border md:w-[80%] md:float-right md:mr-[20px] md:mb-[20px]">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((books) => (
          <div key={books.id} className="mb-[20px] w-[90%] mx-auto">
            <div className="underline">{books.title}</div>
            <div className="flex justify-between ">
              <img src={books.img} width={50} height={50} alt="img" />
              <div>{books.qty}</div>
              <div>₦{books.price}</div>
              <div><FiDelete/></div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>No items</h1>
        </div>
      )}
    </div>
  );
};
