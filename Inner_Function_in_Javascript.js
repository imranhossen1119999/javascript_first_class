function something(greet, name){
    function sayHi(){
        console.log(greet,name)
    }
    sayHi()
}
something('Good Morning', 'imran hossen')

function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}
something('Good Morning', 'imran hossen')

function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}
something('Good Morning', 'Ifty Hossen')