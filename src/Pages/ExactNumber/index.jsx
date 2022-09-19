import React from 'react';
import { useNavigate, useParams } from 'react-router';
import NumberInput from '../../Components/NumberInput';

const ExactNumber = () => {
    const {value} = useParams();
    const navigate = useNavigate();
    return (
        <div className='main'>
            <NumberInput value={value}/>
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    )
}

export default ExactNumber;