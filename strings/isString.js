//is given variable string or String type

let str = 'wednesday'
let Str = new String('wednesday')

console.log (str == Str) // true
console.log (str === Str) // false

function isString (s) {
    return typeof s === 'string' || s instanceof String
}

console.log (isString(str)) //true