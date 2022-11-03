// Rest Parameter == เพิ่มพารามิเตอร์ในฟังชั่นไม่จำกัดจำนวน
const aaa7=(...numbers:number[])=>{
      return numbers.reduce((aaa0,bbb)=>{
            return aaa0+bbb
      },0)
}
console.log(aaa7(100,100))
console.log(aaa7(100,100,300))
