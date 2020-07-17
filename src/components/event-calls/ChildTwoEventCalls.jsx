import React, { Fragment } from 'react';
import { useState } from 'react';

const ChildTwoEventCalls = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    };
    return (
        <Fragment>
            {count} <button onClick={handleClick}>increment</button>
        </Fragment>
    );
}

export default ChildTwoEventCalls;