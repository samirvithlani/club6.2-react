import React from "react";

export default function Content() {
  var name = "Kunal";
  var age = 23;
  var isActive = false;
  var user = {
    name: "peter",
    age: 77,
  };

  return (
    <div style={{ backgroundColor: "GrayText" }}>
      <h3>
        Only thoese things will display which are written in return statment...
      </h3>
      <h3>All tags must have closing tags</h3>
      <h4>In return statment at time only one tage can | should return</h4>
      {name}
      <h1 style={{ color: "blue" }}>Name = {name}</h1>
      <h1>Age = {age}</h1>
      <h2>Status = {isActive == true ? "Active" : "Not Active"}</h2>
      {/* Objects are not valid as a React child (found: object with keys {name, age}). If you meant to render a collection of children, use an array instead. */}
      <h1>{user.name}</h1>
    </div>
  );
}
