import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [users, setusers] = useState([
        {
            id:1,
            name:"amit",
            age:23
        },
        {
            id:2,
            name:"parth",
            age:24
        },
        {
            id:3,
            name:"rahul",
            age:25
        }
    ])

    const deleteUser = (userId)=>{

        //3
        //filter
        // alert(userId)
        var x = users.filter((user)=>{
            
            return user.id !== userId
        })
        console.log(x)
        setusers(x)
    }
  return (
    <div>
        <table border={2} align='center' style={{height:"auto",width:"400px"}}>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            {
                users.map((user)=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>
                                <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}
