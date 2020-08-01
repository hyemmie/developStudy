import React from 'react';
import './Form.css';

// 기존에 있는 함수인가?
const Form =  ({value, onChange, onCreate, onKeyPress}) => {
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    )
}

export default Form;