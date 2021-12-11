import React, { useState, useEffect } from 'react';
export default function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You so cute ${count} days`;
    });
    return (
        <div>
            <p>You so cute {count} days🤍</p>
            <button onClick={() => setCount(count + 1)}>
                cute💖
            </button>
        </div>
    );

}
