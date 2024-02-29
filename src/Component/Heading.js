
import React from 'react'
import { Address } from './Address'
export const Heading = (props) => {
  return (
    <>
    <span style={{color:"darkorange"}}> Name:- {props.name}</span>
    <br/>
    <span style={{color:"hotpink"}}> Age:- {props.age}</span>
    <br/>
    <span style={{color:"darkviolet"}}> mobile:-{props.mobile}</span>
    <br/>
    <Address address={props.address} />
    
    </>
  )
}
