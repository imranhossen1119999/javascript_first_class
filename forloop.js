var sum = 0;
for(var i = 1; i <= 10; i++){
    var result = sum + i
    console.log(sum + ' + ' + i + ' = ' )
    sum = result
}

var sum = 0;
for(var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    sum += i
}
console.log('result = ' + sum)