/* 
    This file is for micro validation functions ie mainly input validation checks
*/

export const isEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const inRange = (value: string, min: number, max?: number): boolean => {
    if (min && max) return value.length >= min && value.length <= max
    if (max) return value.length <= max
    return value.length >= min
}

export const countNumberChar = (value: string) => Array.from(value).reduce( (acc, curr) => {
    return acc + ("0123456789".includes(curr) ? 1 : 0)
}, 0)

export const countSpecialChar = (value: string) => Array.from(value).reduce( (acc, curr) => {
    return acc + ("abcdefghijklmnopqrstuvwxyz0123456789".includes(curr.toLowerCase()) ? 0 : 1)
}, 0)

export const CheckPassword = (password: string): number => {
    if (password.includes(" ")) return 0
    if (countNumberChar(password) === 0) return 1
    if (countSpecialChar(password) === 0) return 2
    return 3
}