import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import FinancialInput from '../../Components/FinancialInput';
import { checkValidation , getRealDataFromString} from '../../Utility';

const FinancialNumber = () => {
    const [currency , setCurrency] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        if(checkValidation(currency)) {
            const value = getRealDataFromString(currency);
            navigate({ pathname: `/result/${value}`}, { replace: true });
        }
        else{
            alert("You have to type the correct format");
        }
    }

    return (
        <div className='main'>
            <FinancialInput 
                value={currency}
                setValue={setCurrency}
            />
            <button onClick={handleClick}>OK</button>
        </div>
    )
}

export default FinancialNumber;