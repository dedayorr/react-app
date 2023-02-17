import React from "react";

export const Listitems = () => {
  const data = ["one", "yeye", "dayo", "four", "five"];

  return (
    <ul>

        {data.map((item,i)=> {
        console.log(i)
        return <Item key={i} item={item.toUpperCase()} />})}
        
    </ul>
  );
};

export const Item = (props) => {

  return <li>{props.item}</li>;

};
