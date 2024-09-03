import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  //register is used to register the input fields it is an object
  //handleSubmit is used to handle the submit event

  const [output, setoutput] = useState({});
  const [isSubbmited, setisSubbmited] = useState(false);

  const submitHandler = (data) => {
    console.log("data...", data);
    setoutput(data);
    setisSubbmited(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>FIRst name</label>
          <input type="text" {...register("fname")}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...register("lname")}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          MALE{" "}
          <input
            type="radio"
            value="male"
            name="gender"
            {...register("gender")}
          ></input>
          <br></br>
          FEMALE{" "}
          <input
            type="radio"
            value="female"
            name="gender"
            {...register("gender")}
          ></input>
          <br></br>
        </div>
        <div>
          <label>SKILLS</label>
          <br></br>
          <input type="checkbox" value="react" {...register("skills")}></input>
          REACT<br></br>
          <input
            type="checkbox"
            value="angular"
            {...register("skills")}
          ></input>
          ANGULAR<br></br>
          <input type="checkbox" value="vue" {...register("skills")}></input>VUE
          <br></br>
        </div>
        <div>
          <label>Country</label>
          <select {...register("country")}>
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="australia">AUSTRALIA</option>
          </select>
        </div>
        <div>
          <label>COLOR</label>
          <input type="color" {...register("color")}></input>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
      {isSubbmited  &&
        <div style={{ color: output.color }}>
          <h2>OUTPUT</h2>
          <p>FIRST NAME:{output.fname}</p>
        </div>
      }
    </div>
  );
};
