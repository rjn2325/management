import React from 'react';
import "./primary-button.scss"

const PrimaryButton =({btnLabel,btnSize, onClick})=> {
    return (
        <div className="primary-btn">
            <button type="button" onClick={onClick} className={btnSize}>{btnLabel}</button>
        </div>
    )
}
export default PrimaryButton;