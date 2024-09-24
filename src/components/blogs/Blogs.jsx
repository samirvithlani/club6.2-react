import React, { useState } from 'react'
import { BlogContext } from '../../BlogContext'
import { BlogList } from './BlogList'
import { BlogAdd } from './BlogAdd'

export const Blogs = () => {

    const [blogs, setblogs] = useState([
        {title: "Blog 1", body: "Body 1",id:1},
        {title: "Blog 2", body: "Body 2",id:2},
        {title: "Blog 3", body: "Body 3",id:3},
    ])

    const addBlog =()=>{
        console.log("add blog")
    }

  return (
    <div>
            <BlogContext.Provider value={{blogs,addBlog}}>
                <BlogList></BlogList>
                <BlogAdd></BlogAdd>
            </BlogContext.Provider>
    </div>
  )
}
