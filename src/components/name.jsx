
import React, { useState, useEffect } from 'react';

const MyValue = () => {
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log('Value has changed:', value);
    }, [value]); 

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <>
            <input type="text" value={value} onChange={handleInputChange} />
        </>
    );
};

export default MyValue;
