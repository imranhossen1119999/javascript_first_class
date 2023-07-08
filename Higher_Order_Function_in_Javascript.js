// First Class Function
function add(a, b){
    return a+b
}

// 1. A Function can be Stored in a Variable
var sum = add
console.log(sum(4, 7))
console.log(typeof sum)
// 2. A Function can be Stored in a Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 9))
// 3. A Function can be Stored in a Object
var obj = {
    sum:add
}
console.log(obj)
console.log(obj.sum(4, 3))
// 4. We can Create Function as Need
setTimeout(function(){
    console.log('Time Out')
},5000)
// 5. We can Pass Function as an Arguments
function add(a,b){
    return a + b
}
function manipulate(a, b, func){
    var c = a + b
    var d = a - b
    //function multifly(){
        //var m = func(a, b)
        //return c*d*m
    //}
    return function(){
        var m = func(a, b)
        return c*d*m
    }
}
var multifly = manipulate(3, 4, add)
console.log(multifly())
// 6. We can return Functions from Another Function