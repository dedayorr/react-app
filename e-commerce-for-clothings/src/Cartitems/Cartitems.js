import React from "react";
import "./Cartitems.css";

export const Cartitems = ({ name, image, prices }) => {
  // console.log(image);
  return (
    <div className="items">
      <div className="image">
        <img src={image} alt="" style={{ height: "100px" }} />
      </div>

      <div className="side">
        <div>
          <div>{name}</div>
          <br/>
          <div>{"$" + prices}</div>
        </div>

        <button>Add To Cart</button>
      </div>
    </div>
  );
};

// <div
//       style={{
//         margin: "20px auto",
//         height: "300px",
//         width: "300px",
//       }}
//     >
//       {sku}
//       {name}
//       {styles}
//       {currency}
//       {prices}
//     </div>
