import React from "react";
import { ProductList } from "./ProductList";

export const Products = () => {
  var pName = "iphone 15";
  var pprice = 1500;

  var prod = {
    name: "ipad mini",
    price: 900,
  };

  var productArray = [
    {
      id: 1,
      name: "iphone 14",
    },
    {
      id: 2,
      name: "iphone 13",
    },
    {
      id: 3,
      name: "iphone 12",
    },
  ];

  return (
    <div>
      <h1>PRODUCTS COMPONENT</h1>

      {/* <ul>
        {
            productArray.map((p)=>{
                return(
                    <li>{p.id} -- {p.name}</li>
                )
            })
        }
      </ul> */}

      {/* parent child */}
      <ProductList name={pName} price={pprice} prod={prod} productArray = {productArray}></ProductList>
    </div>
  );
};
