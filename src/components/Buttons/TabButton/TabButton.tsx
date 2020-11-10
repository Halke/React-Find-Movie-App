import React from 'react'
import './styles.css'

interface ButtonInfo {
    buttonText: string;
    isActive: boolean;
    onClick: () => void
};

// {buttonText, isActive}:ButtonInfo

const TabButton:React.FC<ButtonInfo> = ({buttonText, isActive, onClick}) => {

    return (
        <div className="tab-button">
            <button onClick={onClick} className={isActive ? 'tab-button__active' : 'tab-button__inactive'}>
                {buttonText}
            </button>
        </div>
    )
}

export default TabButton
