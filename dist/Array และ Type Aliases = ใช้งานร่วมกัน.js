"use strict";
const employees2 = [];
employees2.push({ name: "aaa", salary: 50000, department: "aaaa" });
employees2.push({ name: "bbb", salary: 50000 });
employees2.push({ name: "ccc", salary: 50000, department: "ccc" });
//การแสดงข้อมูลทั้งหมด หรือ ทีละตัว
// console.log(employees2)
// console.log(employees2[1])
// การแสดงข้อมูลทั้งหมดแบบ forEach
// employees2.forEach(Element=>{
//       console.log(Element)
// })
// การแสดงข้อมูลทั้งหมดแบบ for of
for (let person of employees2) {
    console.log(person);
}
function aaa5(name) {
    if (!name) {
        return "Hello aaa";
    }
    if (typeof name == "string") {
        return `hello ${name}`;
    }
    throw new Error("ไม่ถูก");
}
console.log(aaa5());
console.log(aaa5("bbb"));
function bbb8(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("ไม่ถูก");
}
console.log(bbb8(100, 100));
console.log(bbb8("200", "200"));
