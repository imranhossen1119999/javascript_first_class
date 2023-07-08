var arr = [4, 5, 1, 6, 8, 9, 40]
//arr[0]
//arr[1]
//arr[2]
//arr[3]
//arr[arr.length -1]
//console.log(arr)
for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}
var arr = [4, 5, 1, 6, 8, 9, 40]
for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 2
}
console.log(arr)

var arr = [4, 5, 1, 6, 8, 9, 40]
var sum = 0
for( var i = 0; i < arr.length; i++){
    sum+= arr[i]
}
console.log(sum)
//filter in Even Number
var arr = [4, 5, 1, 6, 8, 9, 40]
var sum = 0
for( var i = 0; i < arr.length; i++){
    sum+= arr[i]
}
console.log(sum)
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i])

    }
}