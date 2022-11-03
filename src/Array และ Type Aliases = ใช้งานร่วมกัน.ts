// Array && Type Aliases == การใช้งานร่วมกัน
type Employee2 = {
      name: string,
      salary: number,
      department?: string
}

const employees2: Employee2[] = []
employees2.push({ name: "aaa", salary: 50000, department: "aaaa" })
employees2.push({ name: "bbb", salary: 50000 })
employees2.push({ name: "ccc", salary: 50000, department: "ccc" })

//การแสดงข้อมูลทั้งหมด หรือ ทีละตัว
// console.log(employees2)
// console.log(employees2[1])

// การแสดงข้อมูลทั้งหมดแบบ forEach
// employees2.forEach(Element=>{
//       console.log(Element)
// })

// การแสดงข้อมูลทั้งหมดแบบ for of
for (let person of employees2) {
      console.log(person)
}

// Function Overloading == การสร้างฟังก์ชันที่มีชื่อเหมือนกันแต่สามารถรับ พารามิเตอร์จํานวนต่างกันพร้อมคืนค่าที่แตกต่างกันได้
function aaa5(): string
function aaa5(name: string): string
function aaa5(name?: unknown): unknown {
      if (!name) {
            return "Hello aaa"
      }
      if (typeof name == "string") {
            return `hello ${name}`
      }
      throw new Error("ไม่ถูก")
}

console.log(aaa5())
console.log(aaa5("bbb"))

// Function Overloading == รูปแบบใช้หาผลลัพ
// parseInt() == ใช้หาผลลัพ + - * % ของ string กับ string หรือ ทำให้ พารา ที่มี typeof string สามารถ +-*% กันได้  
function bbb8(a: number, b: number): number
function bbb8(a:string,b:string):string
function bbb8(a:unknown,b:unknown):unknown{
      if(typeof a=="number" && typeof b=="number"){
            return a+b
      }
      if(typeof a== "string" && typeof b== "string"){
            return parseInt(a) + parseInt(b)
      }
      throw new Error("ไม่ถูก")
}

console.log(bbb8(100,100)) 
console.log(bbb8("200","200"))