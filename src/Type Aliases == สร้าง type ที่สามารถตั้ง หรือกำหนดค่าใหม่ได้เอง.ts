//Type Aliases == สร้างไทป์ที่สามารถตั้ง หรือกำหนดค่าได้
//Type Aliases (Optional Properties) == วางเครื่องหมาย ? ไว้หลังป๊อปเปอร์ตี้ เพื่อจะใช้หรือไม่ใช้ป๊อปเปอร์ตี้นั้นก็ได้ อันไหนไม่ระบุ ? ก็ต้องนำป๊อปนั้นไปใช้
//Type Aliases (Readonly Modifier) == ระบุ readonly ไว้หน้าป๊อปเปอร์ตี้ เพื่อไม่ให้สามารถแก้ไขค่า หรือ ข้อมูลได้ 
type Employee = {
      id:number,
      name?:string, // ex.optional peoperties
      readonly salary:number, // ex.readonly
      phone?:string //ex.potional peoperties
}
let aaa:Employee={id:2,name:"not",salary:50000,phone:"07000000"}
let bbb2:Employee={id:5,name:"nine",salary:30000,phone:"9090909"}
let ccc:Employee={id:30,salary:40000} 
// วิธีแก้ไขค่า
aaa.id = 50
aaa.phone = "00000"
//aaa.salary == ห้ามแก้ไขข้อมูล
console.log(aaa)
console.log(bbb2)
console.log(ccc)