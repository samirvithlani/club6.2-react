import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext'
import { SubBlogList } from './SubBlogList'

export const BlogList = () => {
    const {blogs} = useContext(BlogContext)
    console.log("blogs in list...",blogs)

  return (
    <div>BlogList
        <SubBlogList></SubBlogList>
    </div>
  )
}
