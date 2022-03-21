
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTranslation } from "react-i18next"





const Home = () => {

  const {t} = useTranslation()
  const dispatch = useDispatch()

  const deletContact = (id)=>{
    dispatch({type:'DELETE_CONTACT',payload:id})
    toast.success("Tenats successfully removed from Hostel")
  }
  const contacts = useSelector(state => state)
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to='add' className=' btn btn-outline-dark'>
            {t('label.addContact')}
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
        {
          contacts.length > 0 ? (
            <>


          <table className='table table-hover' >
            <thead className="text-white bg-dark text-center">
              <tr>
                <th  >#</th>
                <th  >{t('label.name')}</th>
                <th  >Email</th>
                <th  >Number</th>
                <th  >Action</th>
              </tr>
            </thead>
            <tbody>
              {
                contacts.map((contact ,id )=>(
                  <tr key={id} >
                    <td>{id+1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary mr-2' >
                        Edit
                      </Link>
                      <button className='btn btn-small btn-danger ml-2' 
                      onClick={()=> deletContact(contact.id) }
                       >
                        Delete
                      </button>
                    </td>
                  </tr>
                ) )
              }
            </tbody>
          </table>
          </>
          )
          :
          (
            <h1>{t("label.welcomeLine")}</h1>
          )
        }  
        </div>
      </div>
    </div>
  )
}

export default Home