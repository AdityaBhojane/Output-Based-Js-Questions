# Basic to Advance Output Based JavaScript Interview Questions

```js
console.log(a);
let a = 10;
console.log(b);
var b = 20;
```

```js
greet();

function greet() {
  console.log("Hello!");
}

greet();

var sayHi = function () {
  console.log("Hi!");
};

sayHi();

```

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

```

```js
{
  var a = 10;
  let b = 20;
}
console.log(a);
console.log(b);

```

```js
function test() {
  var x = 10;
}
console.log(x);

```

```js
console.log(1 == "1");
console.log(1 === "1");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

```

```js
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log("5" / "2");
console.log("5" * "hello");

```

```js
function add(x = 2, y = x + 1) {
  console.log(x, y);
}

add();
add(3);
add(undefined, 5);

```

```js
console.log(true || false);
console.log(false || "Hello");
console.log(0 && "World");
console.log(1 && "JavaScript");
console.log("" || "Default");
console.log(42 && "Truthy");

```

```js
let x;
console.log(typeof x);
console.log(typeof y);

```

```js
var a = 10;
let b = 20;

var a = 30;
let b = 40;

console.log(a, b);

```
```js
console.log(x);
var x = 5;

console.log(y);
let y = 10;

```
```js
greet();

function greet() {
  console.log("Hello!");
}

greet();

sayHi();

var sayHi = function () {
  console.log("Hi!");
};

```
```js
const obj = { name: "Alice" };
obj.name = "Bob";
console.log(obj.name);

obj = { name: "Charlie" };
console.log(obj.name);

```
```js
function test() {
  var x = 10;
}
console.log(x);

```
```js
{
  let a = 5;
  const b = 10;
}
console.log(a, b);

```
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}

```
```js
console.log(1 == "1");
console.log(1 === "1");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log([] == false);
console.log([] === false);

```
```js
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log("5" / "2");
console.log("5" * "hello");

```
```js
console.log(true || false);
console.log(false || "Hello");
console.log(0 && "World");
console.log(1 && "JavaScript");
console.log("" || "Default");
console.log(42 && "Truthy");

```
```js
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 3));
console.log(multiply(5, undefined));
console.log(multiply(5, null));

```
```js
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof NaN);

```
```js
let x = 5;
console.log(x++);
console.log(++x);
console.log(x);

```
```js
const person = { name: "Alice" };
const people = [person];

person.name = "Bob";
console.log(people[0].name);

person = { name: "Charlie" };
console.log(people[0].name);

```
```js

```
