export function fontSize (size) {
    return {
        extraSmall: '10px',
        small: '15px',
        medium: '20px',
        large: '25px',
        extraLarge: '30px',
    }[size]
}

export function fontWeight (weight) {
    return {
        regular: '200',
        medium: '400',
        bold: '700',
        black: '900',
    }[weight]
}