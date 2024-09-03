import React from "react";

export const ProductList = (props) => {
  console.log("productList props", props);
  return (
    <div>
      <h1>PRODUCT LIST COMPONENT</h1>
      <h2>product Name = {props.name}</h2>
      <h2>product Price = {props.price}</h2>
      <h3>Name {props.prod.name}</h3>
      <h4>{props.prod.price}</h4>
      <ul>
        {props.productArray.map((pro) => {
          return (
            <li>
              {pro.id} -- {pro.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
