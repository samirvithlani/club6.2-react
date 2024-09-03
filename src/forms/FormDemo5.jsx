import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo5 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm({
        mode:"all"
    });
    const submitHandler = (data)=>{}
    const validationSchema = {
        name:{
            required:{
                value:true,
                message:"Name is Required*"
            },
            minLength:{
                value:5,
                message:"Min Length is 5*"
            },
            maxLength:{
                value:15,
                message:"Max Length is 15*"
            }
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
        },
        contact:{
            required:{
                value:true,
                message:"Contact is Required*"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"Contact should be 10 digits* and Valid."
            }
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register('name',validationSchema.name)}></input>
                {
                    errors.name && <p style={{color:"red"}}>{errors.name.message}</p>
                }
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register('age',validationSchema.age)}></input>
                {
                    errors.age && <p style={{color:"red"}}>{errors.age.message}</p>
                }
            </div>
            <div>
                <label>CONTACT</label>
                <input type='text' {...register('contact',validationSchema.contact)}></input>
                {
                    errors.contact && <p style={{color:"red"}}>{errors.contact.message}</p>
                }
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
