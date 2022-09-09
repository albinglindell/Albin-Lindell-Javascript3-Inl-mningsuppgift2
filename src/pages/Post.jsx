import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import { useLocation } from "react-router-dom";

import Category from '../components/Category'



function Post({post}) {
    const location = useLocation()
    const {id} = useParams()
    const [comment, setComment] = useState(null)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/`)
        .then(res => setComment(res.data))
          },[])
  return (<>
  
  <Category />
    <div className='unikPost'>
        <h1 className='postTitle'>{location.state?.title}</h1>
        <h2 className='postBody'>{location.state?.body}</h2>
        <ul>
          {comment && comment.map(user=>{
            if(user.postId == id){
                return <div className='commentContainer'>
                <div className="commentInfoContainer">
                <h3 className='commentName'>{user.name}</h3>
                <h4 className='commentEmail'>{user.email}</h4>
                </div>
                <div className="commentBodyContainer">
                <p className='commentBody'>{user.body}</p>
                </div>
                <h5 className='commentId'>{user.id}#</h5>
                </div>
            }
          })} 
        </ul>
        
        
    </div>
  </>
  )
}

export default Post