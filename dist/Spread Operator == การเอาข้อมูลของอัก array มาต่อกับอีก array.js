"use strict";
// Spread Operator == การเอาข้อมูลของอีก array มาต่อกับอีก array
const aaa6 = ["33", "44"];
const bbb7 = ["11", "22"];
bbb7.push(...aaa6);
console.log(bbb7);
