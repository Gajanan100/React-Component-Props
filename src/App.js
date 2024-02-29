
import React from 'react'
import { Heading } from './Component/Heading'
import { A } from './A'
export const App = () => {
  return (
    <>
    <Heading name="Gajanan"age={22} mobile={7387223660} address={{city:"pune",state:"Maharashtra",pincode:"411052"}} />
    <br/><br/>
    <Heading name="suraj"age={21} mobile={8983353581} address={{city:"Sambhajinagar",state:"Maharashtra",pincode:"411063"}} />
    <br/><br/>
    <Heading name="Sanket"age={22} mobile={9307902373} address={{city:"Mumbai",state:"Maharashtra",pincode:"566631"}} />
    <br></br><br/>
     <A/>
    </>
  )
}
