function add(a,b) {
    var result = a + b
    console.log(result)
}
add(70,50)
function sub(a,b) {
    var result = a - b
    console.log(result)
}
sub(40,10)

var arr1 = [9, 8, 4]
var arr2 = [12, 8, 9]
var arr3 = [19, 18, 4]
//var sum1 = 0
//for(var i = 0; i < arr1.length; i++){
    //sum1 += arr1[i]
//}
//console.log(sum1)

//var sum2 = 0
//for(var i = 0; i < arr2.length; i++){
    //sum2 += arr2[i]
//}
//console.log(sum2)

//var sum3 = 0
//for(var i = 0; i < arr3.length; i++){
    //sum3 += arr3[i]
//}
//console.log(sum3)
function sumOfArray(arr){
    var sum = 0
for(var i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)