
import React, { useState } from 'react'
import { CardElement , useElements , useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}


const PaymentForm = () => {
  const [success,setSuccess] = useState(false)
  const stripe = useStripe()
  const element = useElements()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {error , PaymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card:element.getElement(CardElement)
    })

  if(!error){
    try {
      const {id} = PaymentMethod
      const resp = await axios.post(`http://localhost:4000/payment`,{
        amount:1000,
        id
     } )
     if(resp.data.success){
       console.log('successfull payment')
       setSuccess(true)
     }
    } catch (error) {
      console.log('Error',error)
    }
  }else{
    console.log(error.message);
  }
}
  return (
    <>
    {success ? 
    <form action="" onSubmit={handleSubmit} >
      <fieldset className='FormGroup' >
        <div className="FormRow">
          <CardElement
            options={CARD_OPTIONS}
          />
        </div>
      </fieldset>
      <button>
        pay
      </button>
    </form>

    :
    <div>
      <h2>You just bought a spatula</h2>
    </div>
     }
    </>
  )
}

export default PaymentForm