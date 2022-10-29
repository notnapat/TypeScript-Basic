"use strict";
// Type Assertion == ยืนยันชนิดข้อมูลของตัวแปล
// .toUpperCase == ใช้ได้กับ string
let username;
username = "napat";
// ยืนยัน type แบบที่ 1
// console.log((username as string).toUpperCase())
// ยืนยัน type แบบที่ 2
console.log(username.toUpperCase());
