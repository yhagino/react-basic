import React, {useState} from 'react'

const Basic2 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>useState1</h1>
        <button onClick={() => setCount(count+1)}>count {count}</button>

    </div>
  )
}

export default Basic2