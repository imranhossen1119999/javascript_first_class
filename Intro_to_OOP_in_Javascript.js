var width = 10
var height = 10
function calculateArea(width,height){
    return width * height
}
function calculateRange(width,height){
    return 2 * (width+height)
}
var area = calculateArea(width,height)
var range = calculateRange(width,height)


var rect = {
    width:10,
    height:20,
    calculateArea:function(){
        return this.width * this.height},
        calculateRange:function(){
            return 2 * (this.width + this.height)
        }
    }
    var area = rect.calculateArea()
    var range = rect.calculateRange()
    class Rect{
        constructor(width,height){
            this.width = width
            this.height = height
        }
        calculateArea(){
            return this.width * this.height
        },
        calculateRange(){
            return 2 * (this.width + this.height)
        }
    }
    var rect = new Rect(10,20)
    var rect2 = new Rect(70,46)
    var rect3 = new Rect(7,6)