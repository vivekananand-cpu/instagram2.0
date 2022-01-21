import React from 'react'
import Post from './Post'

const posts=[
    {
        id:0,
        username:"vivek",
        img:"data:image/jpeg;base64,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"
         ,
          caption:"this is my caption"
    },
    {
        id:2,
        username:"sanket",
        img:"data:image/jpeg;base64,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"
         ,
          caption:"this is my caption1"
    }
]

const Posts = () => {
    return (
        <div>
        {
            posts.map((post) =>{
                return (
            <Post key={post.id} id={post.id} username={post.username} img={post.img} caption={post.caption} />
                  
                )
            })
        }
        </div>
    )
}

export default Posts