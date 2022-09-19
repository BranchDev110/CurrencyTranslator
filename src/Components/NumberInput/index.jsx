import React from 'react';

const NumberInput = ({value}) => {
    return (
        <input type="text" value={Number(value).toLocaleString("en")} readOnly/>
    )
}

export default NumberInput;