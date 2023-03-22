import React, {createContext, useState, useEffect} from 'react'

export const ContextProvider = createContext();

export const Context = ({children}) => {
    const [cartItems, setCartItmes] = useState([])
    const [render, setRender] = useState(false)

    useEffect(()=>{
        const getBook = JSON.parse(localStorage.getItem("books"))
        setCartItmes(getBook)
    },[render])

function addCart(item){
    const getBooks = JSON.parse(localStorage.getItem("books")) ||[]
    const bookExist = getBooks.find((books)=> item.id === books.id)
    if(bookExist){
        const updateBook = getBooks.map((book)=> item.id === book.id ? {...book, qty: book.qty+1} : book);
        localStorage.setItem("books",JSON.stringify(updateBook))
        setCartItmes(updateBook)
    }
    else{
        const updateBook = [...getBooks, {...item,qty:1}];
        localStorage.setItem("books",JSON.stringify(updateBook))
        setCartItmes(updateBook)

    }
    setRender(true);
}
const hold = {
    addCart,
    cartItems,
}

  return (
    <div>
        <ContextProvider.Provider value={hold}>
            {children}
            </ContextProvider.Provider>
    </div>
  )
}
