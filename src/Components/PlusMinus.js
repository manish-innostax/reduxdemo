import React from 'react'
import {increment,decrement} from '../Actions/Index'
export default function PlusMinus() {
  return (
    <div>
     <h1>Functional Component</h1>
    <button onClick={()=>decrement}>-</button>
      0
    <button onClick={()=>increment}>+</button>
    </div>
  )
}
