import React from 'react'

interface ButtonInfo {
    buttonText: string;
    isActive: boolean;
    onClick: () => void
};

// {buttonText, isActive}:ButtonInfo

function TabButton({buttonText, isActive, onClick}:ButtonInfo) {

    return (
        <div className="tab-button">
            <button onClick={onClick} className={isActive ? 'tab-button__active' : 'tab-button__inactive'}>
                {buttonText}
            </button>
        </div>
    )
}

export default TabButton
