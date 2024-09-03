import React, { useState } from "react";

export const FormDemo1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [country, setcountry] = useState("")

  const nameHandler = (e) => {
    //console.log(e.target.value);
    setname(e.target.value);
  };

  const submitHandler = () => {
    // console.log(name);
    // console.log(email);

    alert(`Name is ${name} and email is ${email} gender is = ${gender} country = ${country}`);
  };
  return (
    <div>
      <h1 style={{ color: "blue" }}>Form Demo 1</h1>
      <div>
        <label>NAME</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            nameHandler(e);
          }}
        ></input>
        {name}
      </div>
      <div>
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="enter email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        {email}
      </div>
      <div>
        <label>GENDER</label>
        <br></br>
        Male :{" "}
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        ></input>{" "}
        <br></br>
        FeMale :{" "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        ></input>
        <br></br>
      </div>
      <div>
          <select onChange={(e)=>{setcountry(e.target.value)}}>
            <option value ="usa">USA</option>
            <option value ="india">India</option>
            <option value ="uk">UK</option>
          </select>

      </div>
      <div>
        <input type="color"></input>
      </div>
      <div>
        <button onClick={() => submitHandler()}>SUBMIT</button>
      </div>
      {name}
    </div>
  );
};
