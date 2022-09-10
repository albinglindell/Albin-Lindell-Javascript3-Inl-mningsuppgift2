import React from 'react'
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import Category from '../components/Category'


function LandingPage() {
    const [posts, setPosts] = useState(null)

    useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => setPosts(res.data))
    },[])
  return (
    <>
      <Category />
    <div className='landingPage'>
         {posts?.map(post=>
            <div className='posts'>
            <Link to={`/post/${post.id}`} state={post} >
            <h3 className='postTitle'>{post.title}</h3>
            </Link>
            </div>
            
            )}
    </div>
    </>
  )
}

export default LandingPage