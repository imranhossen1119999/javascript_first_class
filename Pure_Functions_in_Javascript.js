// pure Function
function sqr(n){
    return n*n
}
console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))
// Not Pure Function
var n = 10
function change(){
    n = 100
}
change()
console.log(n)
// Not Pure Function
var point = {
    x: 45,
    y: 30
}
function printpoint(point){
    point.x = 100
    point.y = 200
    console.log(point)
}
printpoint(point)
console.log(point)