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



function คำนวณBMI (height: number, weight: number): number{

  return weight / (height * height)
}

function BMI (BMI: number): {อยู่ในเกนท์: string,ภาวะเสี่ยงโรค: string} {
  if (BMI < 18.50) {
    return {อยู่ในเกนท์: 'น้ำหนักน้อย / ผอม', ภาวะเสี่ยงโรค: 'มากกว่าปกติ'}
 } else if (BMI >= 18.50 && BMI <= 22.90) {
  return {อยู่ในเกนท์: 'ปกติ (สุขภาพดี)' , ภาวะเสี่ยงโรค: 'เท่ากับคนปกติ'}
 } else if (BMI >= 23.00 && BMI <= 24.90) {
  return {อยู่ในเกนท์:'ท้วม / โรคอ้วนระดับ 1' , ภาวะเสี่ยงโรค: 'อันตรายระดับ1'}
 } else if (BMI >= 25.00 && BMI <= 29.90) {
   return {อยู่ในเกนท์:'อ้วน / โรคอ้วนระดับ 2' , ภาวะเสี่ยงโรค: 'อันตรายระดับ2'}
 } else {
   return {อยู่ในเกนท์: 'อ้วนมาก / โรคอ้วนระดับ 3' , ภาวะเสี่ยงโรค: 'อันตรายระดับ3'}

 }
}

let height: number =1.65;
let weight: number = 50;

let BMIValue = คำนวณBMI(height, weight);
let BMICategory = BMI(BMIValue);

console.log(`BMI Value: ${BMIValue}`);
console.log(`Category: ${BMICategory.อยู่ในเกนท์}, Risk: ${BMICategory.ภาวะเสี่ยงโรค}`);