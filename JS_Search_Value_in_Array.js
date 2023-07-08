//var arr = [2, 5, 8, 9, 12, 34, 13, 27, 44, 54, 99]

//var find = 10
//for(var i = 0; i < arr.length; i++){
    //if(arr[i] === find){
        //console.log('Data Found at Index' + i)
       // break;
    //}else{
        //console.log('Data Not Found')
    //}
//}

var arr = [2, 5, 8, 9, 12, 34, 13, 27, 44, 54, 99]
var isFound = false
var find = 10
for(var i = 0; i < arr.length; i++){
    if(arr[i] === find){
        console.log('Data Found at Index' + i)
        isFound = true
        break;
    }
}
if(!isFound){
    console.log('Data Not Found')
}

var arr = [2, 5, 8, 9, 12, 34, 13, 27, 44, 54, 99]
var isFound = false
var find = 2
for(var i = 0; i < arr.length; i++){
    if(arr[i] === find){
        console.log('Data Found at Index' + i)
        isFound = true
        break;
    }
}
if(!isFound){
    console.log('Data Not Found')
}