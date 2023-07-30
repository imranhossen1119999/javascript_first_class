{
    var x = 100
    function test(){
        var x = 200
    //console.log(x)
    function nested(){
        //var y = 65
        console.log(x)
    }
    //console.log(y)
    nested()
    }
    test()
    }