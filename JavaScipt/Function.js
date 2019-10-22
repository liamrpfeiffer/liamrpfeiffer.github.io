function isEven(x) {
    if(x % 2 === 0) {
        return "True";
    }  
    if(x % 2 === 1) {
        return "False";
    }    
}

var str = 'Hello-World';
var newStr = str.replace(/-/g, "_");

    document.getElementById("str").innerHTML = "newStr";