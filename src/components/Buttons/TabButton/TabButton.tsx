import React from 'react'

interface ButtonInfo {
    buttonText: string;
    isActive: boolean
};

function TabButton(props:ButtonInfo) {

    return (
        <div className="tab-button">
            <button className={props.isActive ? "tab-button__active" : "tab-button__inactive"}>
                {props.buttonText}
            </button>
        </div>
    )
}

export default TabButton
