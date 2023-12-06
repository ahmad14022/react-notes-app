import React from 'react'

const Button = ({ label, eventHandler, className}) => {
    return (
        <button type='submit' onClick={eventHandler} data-action={label} className={className}>
            {label}
        </button>
    )
}

export default Button;