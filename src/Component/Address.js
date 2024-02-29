
import React from 'react'

export const Address = (props) => {
  return (
    <>
     <span style={{color:"red"}}>Address:- <span>{props?.address?.city}</span>, <span>{props?.address?.state}</span>,<span>{props?.address?.pincode}</span> </span>
    </>
  )
}
