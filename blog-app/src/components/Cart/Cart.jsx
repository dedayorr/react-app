import React, {useState, useContext } from "react";
import { ContextProvider } from "../Context";
import { FiDelete } from "react-icons/fi";
import { useEffect } from "react";
import {GoDiffAdded} from "react-icons/go"
import {AiOutlineMinusSquare} from "react-icons/ai"

export const Cart = () => {
  const { cartBooks, getBooks, addButton, substractButton, totalPrice, deleteBook } = useContext(ContextProvider);


  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="md:mt-[20px] border md:w-[80%] md:float-right md:mr-[20px] md:mb-[20px]">
      {cartBooks && cartBooks.length > 0 ? (
        cartBooks.map((books) => (
          <div key={books.id} className="mb-[20px] w-[90%] mx-auto">
            <div className="underline">{books.title}</div>
            <div className="flex justify-between items-center">
              <img src={books.img} width={50} height={50} alt="img" />
              <div className="flex justify-center items-center gap-2">
                <button onClick={()=>substractButton(books)}><AiOutlineMinusSquare/></button>
                <span>{books.qty}</span>
                <button onClick={()=>addButton(books)}><GoDiffAdded/></button>
              </div>
              <div>₦{books.price}</div>
              <div onClick={()=>deleteBook(books)}>
                <FiDelete />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>No items</h1>
        </div>
      )}

      <div className="font-bold flex justify-center text-xl mb-5" >TOTAL:{totalPrice}</div>
    </div>
  );
};
