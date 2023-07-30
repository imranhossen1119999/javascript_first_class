function a(){
    b()
    console.log('I am a function a')
}
function b(){
    d()
    console.log('I am a function b')
}
function c(){
    console.log('I am a function c')
}
function d(){
    c()
    console.log('I am a function d')
}
var x
x = 100
a()
console.log('I am Global')

//Creational Phase
//Executional Phase