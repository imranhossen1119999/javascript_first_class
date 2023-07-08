var addition = function(a, b){
    return a+b
}
addition(10, 20)
setTimeout(function()
{
    console.log('I will Call After 5 Second')
},5000)
var another = addition
console.log(another(40, 60))