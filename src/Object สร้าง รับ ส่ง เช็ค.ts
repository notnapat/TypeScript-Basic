// การสร้าง Object
// แบบที่1 ไม่กำหนด  type
const person1={
      name:"napat",
      age:20
}

// แบบที่ 2 กำหนด type
const person2:{name:string,age:number}={name:"aaa",age:40}

// สร้าง function รับค่า โดยการรับค่าจาก ข้างบน person1 , person2
function showDetail(data:{name:string,age:number}){
      console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`)
}

showDetail(person2) 

// สร้าง function ส่งค่า ตัวอย่าง ส่งค่าสุมรีเทรินออกไป
// arrow function // const randomPosition=():{lat:number,long:number}=>{
function randomPosition():{lat:number,long:number}{
      return{
            lat:Math.random(),
            long:Math.random()
      }
}
console.log(randomPosition())    

// Escess Peoperties Check == เช็คจำนวนพารามอเตอร์  กับจำนวนค่าป๊อปเพอร์ตี้ที่ไปดึงพารามอเตอร์
//  วิธีเช็ค นำค่าที่ไปดึงพารามิเตอร์ มาไว้ ที่ฟังชั่น output ส่งออก ถ้าจำนวนเกิน ก็จะแจ้งเตือน
function showDetail2(data:{name:string,age:number}){
      console.log(`${data.name}, ${data.age}`)
}
showDetail2({name:"aaaaa",age:30})
