import React, { useState } from "react";

const Basic4 = () => {
    const [products, setProducts] = useState([]);
    const newProducts = () => {
        setProducts([
            ...products,
            {
                id: products.length,
                name: "item" + products.length,
            },
        ]);
    };
    return (
        <div>
            <h1>useState3</h1>
            <button onClick={newProducts}>Add new product</button>
            {products.map((product) => (
                <table key={product.id}>
                    <th>id</th>
                    <td>{product.id}</td>
                    <th>name</th>
                    <td>{product.name}</td>
                    <th>explain</th>
                    <td>{product.name} is xxx.</td>
                </table>
            ))}
        </div>
    );
};
export default Basic4;
