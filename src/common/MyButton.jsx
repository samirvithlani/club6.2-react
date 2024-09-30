import React from "react";

export const MyButton = (props) => {
  return (
    <button
      onClick={() => {
        props.clickHandler();
      }}
      className={props.className ? props.className : "btn btn-primary"}
      style={props.style}
    >
      {props.name}
    </button>
  );
};
