let a = 5, b = 3, result;

function addNumbers() {
    result = a + b;
    console.log(result);
}

var addNumbers = function() {
    result = a + b;
    console.log(result);
}
addNumbers();