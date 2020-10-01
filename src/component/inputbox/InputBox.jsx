import React from 'react';

export const InputBox =({label,inputType, placeholder,onChange})=>{
    return (
        <>
        <div className="inputbox">
            <div className="label">{label}</div>
            <input type={inputType} placeholder={placeholder} onChange={onChange}/>
        </div>
        </>
    )
}