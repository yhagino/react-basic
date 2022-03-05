import React, {useState} from 'react'

// useState

const Basic3 = () => {

    const [products, setProducts] = useState({name: 'aaa', price: '10000'})

  return (
    <div>
        <h1>useState</h1>
        <form>
            <input type='text' value={products.name}
            onChange={evt=>setProducts({...products, name: evt.target.value})} />
            <input type='text' value={products.price}
            onChange={evt=>setProducts({...products, price: evt.target.value})} />
        </form>
        <h3>Hello {products.name}</h3>
        <h3>proce is {products.price}</h3>
    </div>
  )
}

export default Basic3