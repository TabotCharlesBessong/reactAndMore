
// import { post } from 'cypress/types/jquery'
import React from 'react'
import '../App.css'
import Card from '../components/Card'
import posts from '../constant/Data'

const Home = () => {
  return (
    <div className='home' >
       {
         posts.map(post =>(
           <Card key={post.id} post={post} />
         ) )
       }
    </div>
  )
}

export default Home