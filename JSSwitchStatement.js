var a = 2
var b = 10



// a > b true false

if (a > b){
    console.log('A is greater than B')
}

else if (a < b) {
    console.log('B is greater than A')
} else {
    console.log('They Both are Same')
}



var date = new Date ()
// 0-Sunday 1-Monday 2-Tuesday
var today = date.getDay()
switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
        case 1:
        console.log('Today is Munday')
        break
        case 2:
        console.log('Today is Tuesday')
        break
        case 3:
        console.log('Today is Wednesday')
        break
        case 4:
        console.log('Today is Thursday')
        break
        case 5:
        console.log('Today is Friday')
        break
        case 6:
        console.log('Today is Saturday')
        break
}





var date = new Date ()
// 0-Sunday 1-Monday 2-Tuesday
var today = date.getDay()
switch (8) {
    case 0:
        console.log('Today is Sunday')
        break
        case 1:
        console.log('Today is Munday')
        break
        case 2:
        console.log('Today is Tuesday')
        break
        case 3:
        console.log('Today is Wednesday')
        break
        case 4:
        console.log('Today is Thursday')
        break
        case 5:
        console.log('Today is Friday')
        break
        case 6:
        console.log('Today is Saturday')
        break
        default: console.log('Not a Valid Number')
}