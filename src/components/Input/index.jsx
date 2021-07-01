import React from 'react'

const Input = ({value, onChange, placeholder}) => {
    return (
        <div>
            <input 
            type="text" 
            value={value}
            placeholder={placeholder} 
            />
        </div>
    )
}

export default Input
