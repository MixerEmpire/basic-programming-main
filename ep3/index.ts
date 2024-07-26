function helloworld() {
    console.log ("สวัดดี")
}
helloworld() // ไม่มี input ไม่มีoutput



function helloName(name: string) {
    console.log(name)
}
helloName('Mixer Empire') // input ไม่มีoutput



function getPi(){
    return 3.14
}
console.log (getPi()) // ไม่มี input แต่มี output



function st (fname: string, sname: string) {

    if (Fname === 'mix' && Sname === 'zane') {
        console.log ('เริ่มสอน')
  } else{
    console.log ('ไม่สอน')
  }
}

st('mix', 'zane')



function st(fname: string, sname: string, qname: string) {
    if (fname === 'mix' && sname ==='zane'&& qname ==='forth') {
        console.log ('เริ่มสอน')
    } else{
        console.log ('ไม่สอน')
      }
    }
    st ('mix', 'zane' , 'forth')



    function ct(gender: string, height: number, weight: number) {
        if (gender ==='ชาย'&& (height >170 || weight > 50 && weight <= 110)){
        console.log ('จับใบดำใบแดง')
      } else {
        console.log ('ไม่เข้าเกณฑ์')
       }
      }
      ct ('ชาย', 165 , 51)


      function ino (age: number, salary: number ,deposit: number) {
 if(age > 16 && salary < 70000 && deposit < 50000){
  console.log ('ได้10000')
  } else {
    console.log ('ไม่ได้ 10000')
 }
}
ino (19, 9000 ,20000)