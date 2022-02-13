
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EditContact = () => {
  const {id} = useParams()
  return (
    <div className="container">
    <h1 className="display-3 text-center my-5">
    Edit Tenants  {id}
     </h1>
       <div className="row">
         {/* <div className="col-md-6  text-right"> */}
           {/* <h1 className="display-3 text-center"> */}
               {/* Add Tenants */}
           {/* </h1> */}
         {/* </div> */}
         <div className="col-md-6 shadow mx-auto p-5">
            <form action="" className=''>
              <div className="form-group my-2 ">
                <input type="text" placeholder='Name'      className='form-control' />
              </div>
              <div className="form-group my-2 ">
                <input type="email" placeholder='Email Address'      className='form-control' />
              </div>
              <div className="form-group my-2 ">
                <input type="number" placeholder='Telephone'      className='form-control' />
              </div>
              <div className="form-group my-2 ">
                <input type="submit" value='Update Tenants' className='btn        btn-dark  ' />
                <Link to='/' className='btn btn-danger ml-3  ' >
                  Cancel
                </Link>
              </div>
            </form>          
         </div>
       </div>
     </div>
  )
}

export default EditContact