//  Var
const aa = "ตัวแปลคงที่ ไม่สามารถเปลี่ยนข้อมูลได้"
let  bb = "ตัวแปลสถารณะ สามารถเปลี่ยนแปลงค่าได้"

// ชนิดของข้อมูล
// boolean == ค่าทางตรรกศาสตร์ True /False
// number == ตัวเลขที่ไม่มีจุดทศนิยม เช่น 20 และ ตัวเลขที่มีจุดทศนิยม เช่น 30.15
// string    == ข้อความ “kongruksiam”
// ถ้าไม่มีการระบุชนิดของข้อมูล ระบบจะกำหนดชนิดข้อมูลตามค่าของตัวแปลนั้น

// ตังอย่าง
let fname:string = "napat"
let age:number  = 25
let isWorking:boolean     = false

console.log(`ชื่อ = ${fname}`)

// Any & Unknown == ใช้แทนชนิดของตัวแปล ชนิดไดก็ได้ 
// Any  ไม่มีการตรวจสอบชนิดของข้อมูล
// Unknown มีการตรวจสอบชนิดของข้อมูล

// ตัวอย่าง
//Any
// .toFixed ใช้ได้แค่กับ number
function formatNumber(num:any){
      return num.toFixed(2)   
} 

let money:any = "50.12345"
money = 50.12345
console.log(formatNumber(money))

// Unknown ต้องเช็ค type ก่อน
// .toFixed ใช้ได้แค่กับ number
function formatNumbers(num:number){
      return num.toFixed(2)   
} 

let moneys:unknown = "50.12345"
moneys = 50.12345
if(typeof moneys === "number"){
      console.log(formatNumbers(moneys))
}
