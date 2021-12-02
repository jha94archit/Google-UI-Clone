import React from 'react'
import './Button.css'

function Button({text}) {
    return (
        <div className="button-body">
            <h4>{text}</h4>
        </div>
    )
}

export default Button
