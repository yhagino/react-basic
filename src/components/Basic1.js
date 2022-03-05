import React from 'react'

const Basic1 = (props) => {
  return (
    <div>
        <h1>props</h1>
        <p>name: {props.name}</p>
        <p>price: {props.price}</p>
    </div>
  )
}

export default Basic1