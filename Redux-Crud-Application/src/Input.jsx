import React from 'react'

function InputBox({id, name, placeholder, onChange, type, value}) {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                id={id}
                onChange={(e)=>onChange(e)}
                placeholder={placeholder} />
        </div>
    )
}

export default InputBox