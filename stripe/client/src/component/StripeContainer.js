
import React from 'react'
import {Element} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const StripeContainer = () => {
  const PUBLIC_KEY = 'pk_test_51KpJDWKMNYd351cDr7u7UsoVyRgAiRihYuVegbFFddVDCCTTEsT9RBaagIEsOqUcJmZzUiX2GaCUXwthgXORmdGF000GY1fPqW'
  const stripeTestPromise = loadStripe(PUBLIC_KEY)
  return (
    <Element stripe={stripeTestPromise} >
      <PaymentForm/>
    </Element>
  )
}

export default StripeContainer