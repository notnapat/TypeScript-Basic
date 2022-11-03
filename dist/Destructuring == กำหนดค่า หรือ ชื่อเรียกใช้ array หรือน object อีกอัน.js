"use strict";
// Destructuring == กำหนดค่า หรือ ชื่อเรียกใช้ array หรือน object อีกอัน
// Array
const colors = ["แดง", "เขียว", "น้ำเงิน"];
// แบบที่ 1
// const red:string=colors[0]
// const green:string=colors[1]
// const blue:string=colors[2] 
// แบบที่ 2
const [red, green, blue] = colors;
console.log(red);
console.log(green);
console.log(blue);
// Object
const person = {
    fname1: "NNN",
    age1: 30,
    address: "bbbvcvc"
};
const { fname1, age1, address } = person;
console.log(age1);
