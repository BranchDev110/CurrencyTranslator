import React from 'react';

const FinancialInput = ({value , setValue}) => {
    return (
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
    )
}

export default FinancialInput;