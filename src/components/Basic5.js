import React, { useState, useEffect } from "react";

const Basic5 = () => {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState("");
    useEffect =
        (() => {
            console.log("副作用関数が実行されました！");
        },
        [count]);
    return (
        <div>
            <h1>Basic5</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count: {count}
            </button>
            <input
                type='text'
                value={comment}
                onChange={(evt) => setComment(evt.target.comment)}
            />
        </div>
    );
};

export default Basic5;
