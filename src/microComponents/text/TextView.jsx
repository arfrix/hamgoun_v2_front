import React from 'react'
import { fontSize, fontWeight } from './TextLogic'

export default function TextView({ children, size, weight, color, customClass }) {
    return (
        <p className={customClass} style={{
            fontSize: fontSize(size),
            fontWeight: fontWeight(weight),
            color,
        }}>
            {children}
        </p>
    )
}
