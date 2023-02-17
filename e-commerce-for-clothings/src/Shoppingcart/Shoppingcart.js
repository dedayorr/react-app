import React from "react";
import { Cartitems } from "../Cartitems/Cartitems";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Shoppingcart.css";
import { useState, useEffect, useCallback } from "react";

function Shoppingcart() {
  const [products, setProduct] = useState([]);

 
  const fetchProducts =  useCallback(() => {
    const url =
      "https://react-shopping-cart-67954.firebaseio.com/products.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        console.log(data.products,'data')
        setProduct(data.products)
    } )
      .catch((error) => console.error(error));
  },[]) 

  useEffect(()=> {
    fetchProducts();
  },[fetchProducts])
  
  console.log(products);

  // const product = {
  //     "availableSizes": [
  //         "XL"
  //     ],
  //     "currencyFormat": "$",
  //     "currencyId": "USD",
  //     "description": "14/15 s/nº - Jogador",
  //     "id": 4,
  //     "installments": 12,
  //     "isFreeShipping": false,
  //     "price": 25.9,
  //     "sku": 9197907543445676,
  //     "style": "Tony Hawk",
  //     "title": "Skater Black Sweatshirt"
  // }

  return (
    <div className="container">
      <Header />
      <br />
      <br />
      <br />

      <div>
        <div className="sizes">
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
        </div>

        <div className="cartitems">
          {products &&
            products.length > 0 &&
            products.map((items) => (
              <Cartitems key={items.id} item={items.availableSizes} />
            ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Shoppingcart;
