console.log('File loaded successfully!');

var myVar = 5;
console.log(typeof myVar);
myVar = 'Some string value';
console.log(typeof myVar);

{
    let myVar1 = 5;
    console.log(myVar1);
    myVar1 = 'Some string value';
    console.log(myVar1);
}

//console.log(myVar1);

function myFunc() {
    var myArray = []; // new Array 
    for(var i = 0; i < 3; i++) {
        myArray.push(function() {
            console.log(i);
        })
    }
    return myArray;
}

function myFunc1() {
    var myArray = []; // new Array 
    for(let i = 0; i < 3; i++) {
        myArray.push(function() {
            console.log(i);
        })
    }
    return myArray;
}
function testFunc() {
    return {
                ceva: 'something'
            };
} 
console.log(testFunc());
var result = myFunc();
var result1 = myFunc1();
console.log(result);
result[0]();
result[1]();
result[2]();
console.log(result1);
result1[0]();
result1[1]();
result1[2]();

const immutable = 'something';
console.log(immutable);
//immutable = 5;
const array = [];
array.push(1);
array.push(2);

console.log(array);


