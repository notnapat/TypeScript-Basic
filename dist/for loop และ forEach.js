"use strict";
// for loop
for (let count = 1; count <= 10; count++) {
    console.log(count);
}
let users = ["aa", "bb", "cc"];
for (let i = 0; i < users.length; i++) {
    // i=0 คือ i เท่ากับ อาเรที่0
    // users.iengrh คือ ความยาวของอาเร
    // i < users.length;i++ คือ ถ้า i น้อยกว่า ความยาวทั้งหมดของอาเร  ให้นับเพิ่มที่ละ 1 ค่า
    console.log(users[i]);
}
// forEach
users.forEach((Element) => {
    console.log(Element);
});
