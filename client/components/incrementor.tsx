import React, { useState } from "react";

export default function Incrementor() {
    const [count, setCount] = useState(0);

    const incrementValue = () => {
        setCount(count + 1);
    }

    return (<>
        <div className="numberLabel">{count}</div>
        <div data-test="incrementButton" onClick={incrementValue}>Click</div>
    </>);
};
