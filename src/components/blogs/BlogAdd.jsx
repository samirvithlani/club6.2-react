import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext'

export const BlogAdd = () => {
    const {addBlog} = useContext(BlogContext)
    console.log("add blog...",addBlog)
  return (
    <div>BlogAdd</div>
  )
}
