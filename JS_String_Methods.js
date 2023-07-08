var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
console.log(c)

var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
var d = c.substr(10)
console.log(d)

var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
var d = c.substr(10, 7)
console.log(d)

var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
console.log(c.charAt(7))

var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
console.log(c.startsWith('I am'))

var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
console.log(c.endsWith('Hossen'))

var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
console.log(c.endsWith('Hoss345'))

var a = 'I am'
var b = 'Imran Hossen'
var c = a.concat(' ', b)
console.log(a.toUpperCase())
console.log(b.toLowerCase())
// Space Remove
console.log(      'imran Hossen'      .trim())
// split Remove method array
console.log(c.split(' '))
