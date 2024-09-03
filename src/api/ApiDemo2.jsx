import axios from "axios";
import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  //form..
  const submitHandler = async () => {
    //data...
    //alert("submit")
    const user = {
      name: "vishal1",
      age: 23,
      email: "vishal1@gmail.com",
      isActive: false,
    };
    const res = await axios.post("https://node5.onrender.com/user/user", user);
    console.log(res); //axios
    if (res.status === 201) {
      //alert("User added successfully");
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <h1>API DEMO 2</h1>
      <button
        onClick={() => {
          submitHandler();
        }}
      >
        Submit
      </button>
    </div>
  );
};
