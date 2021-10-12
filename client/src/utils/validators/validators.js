export const required = (value) => {
    if (value) return undefined;
    return 'Required field'
}

export const MaxLengthCreator = (maxLength) => (value) => {
    if (value.length >= maxLength) return `Max length is ${maxLength}`;
    return undefined;
}
