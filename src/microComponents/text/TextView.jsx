import React from 'react'

export default function TextView({ children, customClass, ...restProps }) {

    return (
        <p className={customClass} style={{
            ...restProps
        }}>
            {children}
        </p>
    )
}
