import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
  const [cartItems, setCartItmes] = useState([]);
  const [cartBooks, setCartBooks] = useState([]);

  function addToCart(items) {
    const { id, title, img, price } = items;
    const data = { id, title, img, price, qty: 1 };

    const fetchBooks = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];
    const bookExist = fetchBooks.find((books) => books.id === id);
    if (bookExist) {
      alert("Book already added");
    } else {
      const fetchBooksCopy = [...fetchBooks, data];
      localStorage.setItem("books", JSON.stringify(fetchBooksCopy));
    }
    getBooks();
  }

  const getBooks = () => {
    const gottenBooks = JSON.parse(localStorage.getItem("books"));
    setCartBooks(gottenBooks);
  };

  const addButton =(books)=>{
    const bookData = JSON.parse(localStorage.getItem("books"))
    const findBook = bookData.find((item)=>item.id === books.id);
    findBook.qty = findBook.qty + 1;

    localStorage.setItem("books", JSON.stringify(bookData))
    getBooks()
  }

  const substractButton =(books)=>{
    const bookData = JSON.parse(localStorage.getItem("books"))
    const findBook = bookData.find((item)=>item.id === books.id);
    findBook.qty = findBook.qty - 1;

    localStorage.setItem("books", JSON.stringify(bookData))
    getBooks()
  }

  const totalPrice = cartBooks.reduce((price, item)=> price + item.price * item.qty, 0 )

  const deleteBook = (books)=>{
    const bookData = JSON.parse(localStorage.getItem("books"))
    const filterBooks = bookData.filter((item)=>item.id !== books.id);
    localStorage.setItem("books", JSON.stringify(filterBooks))
    window.confirm("Are you sure you want to remove")
    getBooks()

  }

  const hold = {
    addToCart,
    getBooks,
    cartBooks,
    addButton,
    substractButton,
    totalPrice,
    deleteBook
  };

  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
