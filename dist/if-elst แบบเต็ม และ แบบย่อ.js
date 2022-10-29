"use strict";
let amount = 11;
let result;
// % 2 == 0   คือ หาร2 แล้วได้เศษ 0 ตัว
// แบบเต็ม
if (amount % 2 == 0) {
    result = "เลขคู่";
}
else {
    result = "เลขคี่";
}
console.log(result);
//  แบบย่อ หรือ ลดรูป
result = (amount % 2 == 0) ? "11" : "2";
console.log(result);
