 
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../redux'

const UserContainer = ({userData,fetchUsers}) => {
  
  useEffect(()=>{
    fetchUsers()
  },[])

  return (
     userData.loading ? (
       <h2>Loading...</h2>
     ) : userData.error ? (
       <h2> {userData.error} </h2>
     ): (
       <div className="">
         <h2>
           UserList 
         </h2>
         <div className="">
           {
             userData && userData.users && userData.users.map(
               user => <p> {user.name} </p>
             )  
           }
         </div>
       </div>
     )
  )
}
  

const mapStateToProps = (state)=>{
  return {
    userData: state.user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    fetchUsers : ()=> dispatch(fetchUsers())
  }
}

export default  connect(mapDispatchToProps,mapDispatchToProps)(UserContainer)