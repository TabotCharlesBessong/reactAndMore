
import React from 'react'
import posts from '../constant/Data'

const Post = () => {

  const post = posts[1]
  return (
    <div className='post' >
      <img src={post.img} alt="" className='postImg' />
      <h1 className="postTitle">
{post.title}
      </h1>
      <p className="postDesc">
{post.desc}
      </p>
      <h4 className="postLongDesc">
{post.long}
      </h4>
    </div>
  )
}

export default Post