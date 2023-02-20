import React from "react";
import { Cartitems } from "../Cartitems/Cartitems";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Shoppingcart.css";

// import { useState, useEffect, useCallback } from "react";

function Shoppingcart() {
  const products = [
    // {
    //   id: 1,
    //   name: "White T-shirt",
    //   img: `${require("../Image/a.jpeg")}`,
    //   price: 10000,
    // },
    {
      id: 2,
      name: "Cotton Linen Casual Fashion Slim Lapel Shirt-black",
      img: `${require("../Image/CottonLinenCasualFashionSlimLapelShirt-black.jpeg")}`,
      price: 10000,
    },
    // {
    //   id: 3,
    //   name: "D'Andre Avybe Black Danshiki",
    //   img: `${require("../Image/DAndreAvybeBlackDanshiki.jpeg")}`,
    //   price: 10000,
    // },
    {
      id: 4,
      name: "Men's Business Shirts-2Pcs- White+Black",
      img: `${require("../Image/MensBusinessShirts2PcsWhiteBlack.jpeg")}`,
      price: 10000,
    },
    {
      id: 5,
      name: "Men's Superior Quality Long Sleeve Shirt",
      img: `${require("../Image/MensSuperiorQualityLongSleeveShirt.jpeg")}`,
      price: 10000,
    },
    {
      id: 6,
      name: "MURIOKI Men's Graffiti Hawaiian Short Sleeve Shirt - White",
      img: `${require("../Image/MURIOKIMensGraffitiHawaiianShortSleeveShirtWhite.jpeg")}`,
      price: 10000,
    },
    {
      id: 7,
      name: "MURIOKI Men's Loose Vintage Short Sleeve Printed Beach Shirt - Green",
      img: `${require("../Image/MURIOKIMensLooseVintageShortSleevePrintedBeachShirtGreen.jpeg")}`,
      price: 10000,
    },
    {
      id: 8,
      name: "MURIOKI Mens Vintage Printing Ethnic Short Sleeve Shirt - Multi",
      img: `${require("../Image/MURIOKIMensVintagePrintingEthnicShortSleeveShirtMulti.jpeg")}`,
      price: 10000,
    },
    {
      id: 9,
      name: "Summer Men's Loose Short Sleeve Hawaii Beach Shirt",
      img: `${require("../Image/SummerMensLooseShortSleeveHawaiiBeachShirt.jpeg")}`,
      price: 10000,
    },
    {
      id: 10,
      name: "T-Shirts +Shorts 100% Cotton Men's Short Sleeve Set",
      img: `${require("../Image/TShirtsShortsCottonMensShortSleeveSet.jpeg")}`,
      price: 10000,
    },
  ];

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

        {products.map((items) => (
          <Cartitems keys={items.id} name={items.name} image={items.img} prices={items.price} />
        ))}
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Shoppingcart;

{
  /* <div className="cartitems">
          {products &&
            products.length > 0 &&
            products.map((items) => (
              <Cartitems key={items.id} sizes={items.availableSizes}  name={items.title} sku={items.sku} styles={items.style} prices={items.price}10000 currency={items.currencyFormat}/>
            ))}
        </div> */
}
// const [products, setProduct] = useState([]);

// const fetchProducts =  useCallback(() => {
//   const url =
//     "https://react-shopping-cart-67954.firebaseio.com/products.json";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) =>{
//       // console.log(data.products,'data')
//       setProduct(data.products)
//   } )
//     .catch((error) => console.error(error));
// },[])

// useEffect(()=> {
//   fetchProducts();
// },[fetchProducts])

// console.log(products);

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
//     "price"10000: 25.9,
//     "sku": 9197907543445676,
//     "style": "Tony Hawk",
//     "title": "Skater Black Sweatshirt"
// }
