import React from 'react'
import { D } from './D'

export const C = () => {
  return (
    <>
        <div>
            I am <span style={{color:"red", fontWeight:"bold"}}>C</span> & my parent is B.js
        </div>
        <D/>
    </>
  )
}
