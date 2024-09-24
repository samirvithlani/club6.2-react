import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext'

export const SubBlogList = () => {
    const {blogs} = useContext(BlogContext)
    console.log("blogs in sublist...",blogs)
  return (
    <div>SubBlogList</div>
  )
}
