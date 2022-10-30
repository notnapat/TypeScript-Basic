"use strict";
// Function void ==  ฟังชั่นที่ไม่มีการรับและส่งค่า
// จะใส่ void หรือไม่ใส่ ก็ทำงานได้
function sayHi() {
    console.log("void");
}
sayHi();
// Function Parameter == ฟังชั่นที่มีการรับค่าพารามิเตอร์
// เป็นฟังชั่นรับค่าแต่ทำไมมี void อันนี้ไม่รู้ ไม่แน่ใจ
function bbb(name) {
    console.log(`Hello ${name}`);
}
bbb("Parameter");
// Function Return == ฟังชั่นที่มีการรับค่า
function ccc1() {
    return 5000;
}
function ccc2() {
    return "Return";
}
console.log(ccc1());
console.log(ccc2());
// Function Parameter && Return == ฟังชั่นที่มีการรับและส่งค่า
// num % 2 == 2หารอะไรแล้วได้เศษ 0
function ParaAndRe1(num) {
    if (num % 2 === 0) {
        return "คู่";
    }
    else {
        return "คี่";
    }
}
function ParaAndRe2(a, b) {
    return a + b;
}
console.log(ParaAndRe1(5));
console.log(ParaAndRe2(20, 30));
// Arrow Function == เปลี่ยนแปลง code จาก function เดิมนิดหน่อย แต่ใช้งานเหมือนกัน และได้ผลลัพธ่เหมือนกัน
// 1 เปลี่ยน funstion เป็น const
// 2 เพิ่ม = เข้าไปหลังชื่อตัวแปล
// 3 เพิ่ม => เข้าไปหลังพารา หรือ หลัง type
const ParaAndRe3 = (num) => {
    if (num % 2 === 0) {
        return "คู่";
    }
    else {
        return "คี่";
    }
};
const ParaAndRe4 = (a, b) => {
    return a + b;
};
console.log(ParaAndRe3(5));
console.log(ParaAndRe4(20, 30));
// Default Parameter == ระบุค่าเริ่มต้นของพารามิเตอร์
const DefaultPara = (name = "aaa") => {
    console.log(`ชื่อ = ${name}`);
};
DefaultPara("bbb");
DefaultPara();
