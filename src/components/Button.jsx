import React from 'react'

const Button = ({children, type}) => {
    return (
        <button className={type === 'secondary' ? 
        'flex items-center justify-center w-full p-3 border rounded-md gap-2 hover:bg-black/5 transition-colors duration-200' : 
        'p-3 mt-5 bg-sky-950 text-white font-semibold rounded-md cursor-pointer hover:bg-sky-900 transition-colors duration-200;'}>
            {children}
        </button>
    )
}

export default Button
