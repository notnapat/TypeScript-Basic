"use strict";
// Array == สร้าง
const user2 = ["aaa2", "bbb2"];
console.log(user2);
const user3 = [333, 444];
console.log(user3);
//  เพิ่มข้อมูลเข้าไปในอาเรย์
const user1 = [];
user1.push("aaa");
user1.push("bbb");
console.log(user1);
// เข้าถึงข้อมูลในอาเรย์
const user4 = ["เข้า", "ถึง"];
// แก้ไขอินเดกที่ 0s
user4[0] = "ใหม่";
console.log(user4[1]);
console.log(user4[0]);
console.log(user4.length);
// array for loop
const user5 = ["aaa", "bbb", "ccc"];
for (let i = 0; i < user5.length; i++) {
    console.log(`${i} = ${user5[i]}`);
}
// array forEach
const user6 = ["aaaaaa", "bbbbbb", "cccccc"];
user6.forEach(Element => {
    console.log(Element);
});
