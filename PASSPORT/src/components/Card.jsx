
import { Button } from '@material-ui/core'
import React from 'react'

const Card = ({post}) => {
  return (
    <div className='card' >
      <span className="title">
        {post.title}
      </span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">
        {post.desc}
      </p>
      <Button
      variant='component'
      color='primary'
      >
read more
      </Button>
    </div>
  )
}

export default Card