//var rect = {
    //width:100,
    //height:50,

    //draw: function(){
        //console.log('I am a rectangle')
        //this.printProperties()
    //},
    //printProperties: function(){
        //console.log('My width is ' + this.width)
        //console.log('my height is ' + this.height)
    //}
//}
//rect.draw()
//rect.height = 200
//rect.draw()
//function myFunc(){
    //console.log(this)
    //rect.printProperties()
//}
//new myFunc()
//var another = {
    //width:47,
    //height:56,
    //print:rect.printProperties
//}
//console.log(rect.printProperties)
//another.print()
//-------video 110-----------
//var createRect = function(width,height) {
    //return {
       // width:width,
        //height:height,
    
        //draw: function(){
            //console.log('I am a rectangle')
            //this.printProperties()
           //console.log(this)
        //},
        //printProperties: function(){
            //console.log('My width is ' + this.width)
            //console.log('my height is ' + this.height)
        //}
    //}
//}
//var rect1 = createRect(10,23)
//rect1.draw()
//var rect2 = createRect(70,75)
//rect2.draw()
//-------video 111-----------
//var Rectangle = function(width,height){
    //this.width = width
    //this.height = height
    //this.draw = function(){
        //console.log('I am a rectangle')
        //this.printProperties()
        //console.log(this)
    //}
    //this.printProperties = function(){
        //console.log('My width is ' + this.width)
        //console.log('My height is ' + this.height)
    //}
//}
//var rect3 = new Rectangle(10, 9)
//rect3.draw()
//-------video 112-----------
//function myNew(constructor){
    //var obj = {}
    //Object.setPrototypeOf(obj, constructor.prototype)
    //var argsArray = Array.prototype.slice.apply(arguments)
    //constructor.apply(obj, argsArray.slice(1))
    //return obj
//}
//var rect4 = myNew(Rectangle, 55,60)
//rect4.draw()
//-------video 114------ Constructor in Javascript-----
//var str = new String('str')
//console.log('My string is ' + str)
//-------video 115------ Functions Are Object in Javascript-----
//function test(){
    //console.log('something')
//}
//console.log(test.name, test.length)
//var Rect = new Function('width', 'height', `this.width = width
    //this.height = height
    //this.draw = function(){
        //console.log('I am a rectangle')
        //this.printProperties()
        //console.log(this)
    //}
    //this.printProperties = function(){
        //console.log('My width is ' + this.width)
        //console.log('My height is ' + this.height)
    //}`
    //)
    //var rect5 = new Rect(10,5)
    //console.log(rect5)
    //function myFunc(){
        //console.log(this)
        //console.log(this.a + this.b)
    //}
    //myFunc.call({a:40, b:15})
    //myFunc.call({a:400, b:150})
    //myFunc.apply({})
    //myFunc()
    //--------call----------
    //function myFunc(c,d){
        //console.log(this)
        //console.log(this.a + this.b + c + d)
    //}
    //myFunc.call({a:40, b:15}, 15, 10)
    //myFunc.call({a:400, b:150})

    //--------apply-----------
    //function myFunc(c,d){
        //console.log(this)
        //console.log(this.a + this.b + c + d)
    //}
    //myFunc.apply({a:40, b:15}, [150, 100])
    //---------bind----------
    //function myFunc(c,d){
        //console.log(this)
        //console.log(this.a + this.b + c + d)
    //}
    //var testBind = myFunc.bind({a:400, b:15}, 150, 100)
    //testBind()
    //---------117------Pass By Value vs Pass By Reference in Javascript----
    //var n = 10
    //function change(n){
        //n = n + 100
        //console.log(n)
    //}
    //change(n)
    //console.log(n)
    //var obj = {
        //a: 20,
        //b: 30
    //}
    //function changeMe(obj){
        //obj.a = obj.a + 100
        //obj.b = obj.b + 100
        //console.log(obj)
    //}
    //changeMe(obj)
    //console.log(obj)
    //---------118------ Abstraction in Javascript----
    //var rect7 = new Rectangle(40,35){

    //}
     //---------119------ private properties in javascript----
     //var Rectangle = function(width,height){
        //this.width = width
        //this.height = height
        //var position = {
            //x:56,
            //y:-100
        //}
       
    //var printProperties = function(){
        //console.log('My width is ' + this.width)
        //console.log('My height is ' + this.height)
    //}.bind(this)
    //this.draw = function(){
        //console.log('I am a rectangle')
        //printProperties()
        //console.log('position: x=' + position.x + 'y=' + position.y)
    //}
//}
//var rect7 = new Rectangle(40,35)
//rect7.draw()
  //---------120------ How to Use Getter Setter in Javascript----
  //var Rectangle = function(width,height){
    //this.width = width
    //this.height = height
    //var position = {
        //x:56,
        //y:-100
    //}
   
//var printProperties = function(){
    //console.log('My width is ' + this.width)
    //console.log('My height is ' + this.height)
//}.bind(this)
//this.getposition = function(){
    //return position
//}
//this.draw = function(){
    //console.log('I am a rectangle')
    //printProperties()
    //console.log('position: x=' + position.x + 'y=' + position.y)
//}
//Object.defineProperty(this, 'position',{
    //get: function(){
        //return position
    //},
    //set: function(value){
        //position = value
    //}
//})
//}
//var rect7 = new Rectangle(40,35)
//rect7.draw()
//rect7.position = {
    //x:456,
    //y:-123
//}
//console.log(rect7.position)
//---------123------Multi Level Inheritance in Javascript----
//function Person(name){
    //this.name = name
//}
//var p1 = new Person('Imran Hossen')
//console.log(p1)
//---------124------Property Descriptor in Javascript----
//var person = {
    //name: 'Imran hossen'
//}
//console.log(person)
//for(var i in person){
    //console.log(i)
//}
//console.log(Object.keys(person))
//var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
//console.log(descriptor)
//let baseObj = Object.getPrototypeOf(person)
//let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
//console.log(descriptor)
//Object.defineProperty(person, 'name',{
    //enumerable:false,
    //writable:false,
    //configurable:false,
    //value:'Munshi Imran Hossen'
//})
//---------124------Constructor Prototype in Javascript----
//function person(name){
    //this.name = name
//}
//person.prototype.PI = 2.4454
//var p1 = new person('Imran Hossen')
//var p2 = new person('Munshi Imran Hossen')
//console.log(Object.getPrototypeOf(p1))
//console.log(person.prototype)
//console.log(p1)
//console.log(p2)
//function Square(width){
    //this.width = width
//}
    //Square.prototype = {
        //draw: function(){
            //console.log('Draw')
        //},
        //toString: function(){
           // return 'My width is = ' + this.width
        //}
    //}

//var sqr1 = new Square(10)
//var sqr2 = new Square(5)
//---------127------Using Instance and Prototype Members in Javascript----
//function Square(width){
    //this.width = width
    //this.getWidth = function(){
        //console.log('This width is = ' + this.width)
        //this.draw()
    //}
//}
    //Square.prototype = {
        //draw: function(){
            //this.getWidth()
            //console.log('Draw')
        //},
        //toString: function(){
            //return 'My width is = ' + this.width
        //}
    //}

//var sqr1 = new Square(10)
//var sqr2 = new Square(5)
//---------128------Iterate Object and HasOwnProperty in Javascript----
//function Square(width){
    //this.width = width
    //this.getWidth = function(){
        //console.log('This width is = ' + this.width)
        //this.draw()
    //}
//}
    //Square.prototype = {
        //draw: function(){
            //this.getWidth()
            //console.log('Draw')
        //},
        //toString: function(){
            //return 'My width is = ' + this.width
        //}
    //}

//var sqr1 = new Square(10)
//var sqr2 = new Square(5)
//console.log(Object.keys(sqr1))
//for(var i in sqr1){
    //console.log(i)
//}
//---------130------First Prototypical Inheritance in Javascript----
//function Shape(){

//}
//Shape.prototype = {
    //common:function(){
        //console.log('common idea in javascript')
    //}
//}
//function Square(width){
    //this.width = width
//}
//Square.prototype = Object.create(Shape.prototype)
//Square.prototype.draw = function(){
        //console.log('Drawing')
    //}
    

//var shape = new Shape()
//var sqr = new Square(45)
//function Circle(){

//}
//Circle.prototype = Object.create(Shape.prototype)
//---------131------Reset Constructor After Inheritance in Javascript----
//function Shape(){

//}
//Shape.prototype.common = function(){
        //console.log('common idea in javascript')
    //}

//function Square(width){
    //this.width = width
//}
//Square.prototype = Object.create(Shape.prototype)
//Square.prototype.constructor = Square
//Square.prototype.draw = function(){
        //console.log('Drawing')
    //}
   
    

//var shape = new Shape()
//var sqr = new Square(45)
//---------132------Calling Super With Call Method in Javascript----
//function Shape(color){
    //this.color = color
//}
//Shape.prototype.common = function(){
        //console.log('common idea in javascript')
    //}

//function Square(width,color){
    //Shape.call(this,color)
    //this.width = width
//}
//Square.prototype = Object.create(Shape.prototype)
//Square.prototype.constructor = Square
//Square.prototype.draw = function(){
        //console.log('Drawing')
    //}
   
    

//var shape = new Shape()
//var sqr = new Square(45, 'green')
//---------133------Creating Extends Function in Javascript----
//function extend(Parent,Child){
    //Child.prototype = Object.create(Parent.prototype)
    //Child.prototype.constructor = Child
//}
//function Shape(color){
    //this.color = color
//}
//Shape.prototype.common = function(){
        //console.log('common idea in javascript')
    //}

//function Square(width,color){
    //Shape.call(this,color)
    //this.width = width
//}
//extend(Shape, Square)
//Square.prototype.draw = function(){
        //console.log('Drawing')
    //}
   
    

//var shape = new Shape()
//var sqr = new Square(45, 'green')
//function Circle(radius, color){
    //Shape.call(this, color)
    //this.radius = radius
//}
//extend(Shape, Circle)
//---------134------Creating Extends Function in Javascript--Method Overriding in Javascript-135-
//function extend(Parent,Child){
    //Child.prototype = Object.create(Parent.prototype)
    //Child.prototype.constructor = Child
//}
//function Shape(color){
    //this.color = color
//}
//Shape.prototype.common = function(){
        //console.log('common idea in javascript')
    //}

//function Square(width,color){
    //Shape.call(this,color)
    //this.width = width
//}
//extend(Shape, Square)
//Square.prototype.draw = function(){
        //console.log('Drawing')
    //}
   
    

//var shape = new Shape()
//var sqr = new Square(45, 'green')
//function Circle(radius, color){
    //Shape.call(this, color)
    //this.radius = radius
//}
//extend(Shape, Circle)
//Circle.prototype.common = function(){
    //Shape.prototype.common.call(this)
    //console.log('new circle in javascript')
//}
//ar c = new Circle(4, 'Black')
//---------135------Polymorphism in Javascript--
//function extend(Parent,Child){
    //Child.prototype = Object.create(Parent.prototype)
    //Child.prototype.constructor = Child
//}
//function Shape(color){
    //this.color = color
//}
//Shape.prototype.common = function(){
        //console.log('common idea in javascript')
    //}

//function Square(width,color){
    //Shape.call(this,color)
    //this.width = width
//}
//extend(Shape, Square)
//Square.prototype.draw = function(){
        //console.log('Drawing')
    //}
    //Square.prototype.common = function(){
    //console.log('new circle in javascript')
//}
   
    

//var shape = new Shape()
//var sqr = new Square(45, 'green')
//function Circle(radius, color){
    //Shape.call(this, color)
    //this.radius = radius
//}
//extend(Shape, Circle)
//Circle.prototype.common = function(){
    //Shape.prototype.common.call(this)
    //console.log('new circle in javascript')
//}
//var c = new Circle(4, 'Black')
//var s = new Shape('Pirple')
//var shapes = [s, c, sqr]
//for(var i of shapes){
    //i.common()
//}
//---------137------Inheritance & Composition Mixing in Javascript--
function mixin(target, ...sources){
    Object.assign(target, ...sources)
}
var canWalk = {
    walk: function(){
        console.log('Walking')
    }
}
var canEat = {
    eat:function(){
        console.log('Eating')
    }
}
var canSwim = {
    swim:function(){
        console.log('Swimming')
    }
}
//constructor formula
//var person = Object.assign({}, canWalk, canEat)
//person.name = 'Imran Hossen'
function person(name){
    this.name =name
}
//Object.assign(person.prototype, canWalk, canEat)
mixin(person.prototype, canWalk, canEat)
var person = new person('Imran Hossen')
console.log(person)
function GoldFish(name){
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)
var fish = new GoldFish('bla bla bla')
console.log(fish)