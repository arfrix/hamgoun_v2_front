import React from 'react'
import TextView from './TextView'
import { fontSize, fontWeight } from './TextLogic'

export default function TextContainer({ children, size, weight, ...restProps }) {
    return (
        <TextView fontSize={fontSize(size)} fontWeight={fontWeight(weight)} {...restProps}>
            {children}
        </TextView>
    )
}
