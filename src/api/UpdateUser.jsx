import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const UpdateUser = () => {
  const id = useParams().id;
  const { register, handleSubmit } = useForm({
    defaultValues:async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
        return res.data.data
    }
  });
  const submitHandler = async(data) => {
    //update api call
    //console.log("data", data);
    delete data._id;
    try{

    const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data);
    console.log("update res", res);
    }catch(e){
        console.log("error",e)
        alert("error")
    }

  };
  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
            <label>EMAIL</label>
            <input type="text" {...register("email")} />
            </div>
        <div>
          <input type="submit" value="Update User" />
        </div>
      </form>
    </div>
  );
};
