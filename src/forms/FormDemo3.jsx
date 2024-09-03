import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    console.log("error...",errors);
    const submitHandler = (data)=>{
        console.log("data...",data);
    }

    const validationSchema = {

        email1 :{
            required:{
                value:true,
                message:"Email is Required*"
            },
            minLength:{
                value:5,
                message:"Min Length is 5*"
            },
            maxLength:{
                value:15,
                message:"Max Length is 10*"
            },
        },
        age:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"Min Age is 18*"
            },
            max:{
                value:60,
                message:"Max Age is 60*"
            }
        }
    }


  return (
    <div>
        <h1 style={{textAlign:"center",color:"blue"}}>Form Demo 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text'{...register("name",{required:{value:true,message:"Name is Required*"}})} placeholder='enter name'></input>
                {
                    errors.name && <p style={{color:"red"}}>{errors.name.message}</p>
                }
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email",validationSchema.email1)}></input>
                {
                    errors.email && <p style={{color:"red"}}>{errors.email.message}</p>
                }
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.age)}></input>
                {
                    errors.age && <p style={{color:"red"}}>{errors.age.message}</p>
                }
            </div>
            <div>
                <input type='submit' value="SUBMIT"></input>
            </div>
        </form>
    </div>
  )
}
