// Question answers with explanation



/** var keyword hoist on the top thats why we will be able 
 * to access b as undefined but let keyword goes into TDZ temporal dead zone
 * hence we cannot access it it will give reference error*/

console.log(a);
let a = 10;
console.log(b);
var b = 20;




/***
 * regular function in js are also support hoisting and thats why are able 
 * to access greet function but sayHi is not a regular function its a 
 * function expression so it give us error although it also hoisted but 
 * again it will give undefined if we print it and if we try to call it 
 * then just because if doest hold reference of that function so thats why it 
 * give sayHi is not a function like that
 */

greet();

function greet() {
  console.log("Hello!");
}

greet();

var sayHi = function () {
  console.log("Hi!");
};

sayHi();







/**as we already know var is functional scoped thats why even its inside 
 * loop still it will go into global scope and when all async task comes back
 * then at that point of that value of i will be 3 so it will print 3 times 3
*/ 
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}




/** 
 * so again var is functional scoped and it will go into global scope 
 * and we are trying to access it then it will print its value but 
 * in case of let b its inside a block scope so it cannot access outside 
 * so it will give error 
 */

{
  var a = 10;
  let b = 20;
}
console.log(a);
console.log(b);






/***
 * so just because var is function scope and it inside the function 
 * so this time it cannot be access on global scope 
 */

function test() {
  var x = 10;
}
console.log(x);


  
  
  