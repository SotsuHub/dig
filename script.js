'use strict'
// 1行目に記載している 'use strict' は削除しないでください



// ----------講義----------
/*バックスラッシュとアスタリスクで囲むと、複数行コメントにできます。
これは複数行のコメントです。
この2行目もコメントになっています。 */

function addTen(number){
    console.log("関数始まるよ");
    console.log(number + 10);
    return number + 10;
}
console.log(addTen(5));



// ---------基礎演習1----------
function add(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(add(4, 3)); // 7 を表示
console.log(add(100, 42)); // => 142



// ---------基礎演習2----------
console.log(add(100)); // 何が起こる？
console.log(add(1, 4, 5)); // 何が起こる？



// ---------基礎演習3----------
function simpleFunctionA() {
    return "Hello simple function A";
}

function simpleFunctionB() {
    console.log("Hello simple function B");
}

console.log(simpleFunctionA(), "--> From running Simple Function A");
console.log(simpleFunctionB(), "--> From running Simple Function B");



// ---------基礎演習4----------
function subtract(num1, num2) {
    // ここにコードを書いてください
    return num1 - num2;
}
console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58



// ---------基礎演習5----------
// ここにコードを書いてください
function greeting(name){
    return "Hallo, " + name +"!";
}
console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Beau")); // => "Hello, Beau!"



// ---------基礎演習6----------
function average(num1,num2){
    return (num1 + num2) / 2;
}
console.log(average(2,4));



// ---------基礎演習7----------
function square(base) {
    return base * base;
}
console.log(square(5));

function Square(length) {
    return length * length;
}



// ---------基礎演習8----------
function cube(x) {
    return x ** 3;
}
console.log(cube(5));



// ----------中級演習1----------
function simpleHelloA() {
    console.log("hello");
}

function simpleHelloB() {
    return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);



// ----------中級演習2----------
// ----------中級演習3----------
// ----------応用演習1----------
// ----------応用演習2----------
// ----------応用演習3----------
// ----------応用演習4----------