// function sayHi(day0fwekk: number) {
//     if (day0fwekk === 1) {
//         console.log('สวัดดีวันอาทิตย์')
//     } else if (day0fwekk === 2) {
//         console.log('สวัดดีวันจันทร์')
//     } else if (day0fwekk === 3) {
//         console.log('สวัดดีวันอังคาร')
//     } else if (day0fwekk === 4) {
//         console.log('สวัดดีวันพุธ')
//     } else if (day0fwekk === 5) {
//         console.log('สวัดดีวันพฤหัส')
//     } else if (day0fwekk === 6) {
//         console.log('สวัดดีวันศุกร์')
//     } else if (day0fwekk === 7) {
//        console.log('สวัดดีวันเสาร์') 
//     }

// }
// sayHi (6)



// function sayHi(day0fwekk: number) {
//     switch (day0fwekk) {
//         case 1:
//             console.log('สวัดดีวันอาทิตย์')
//             break
//         case 2:
//             console.log(' สวัดดีวันจันทร์')
//             break
//         case 3:
//             console.log('สวัดดีอังคาร')
//             break
//         case 4:
//             console.log('สวัดดีวันพุธ')
//             break
//         case 5:
//             console.log('สวัดดีวันพฤหัส')
//             break
//         case 6: 
//             console.log(' สวัดดีวันศุกร์')
//             break
//         case 7:
//             console.log('สวัดดีวันเสราร์')
//             break
//     }
// }
// sayHi(7) 



// function size(si: string) {
//     switch (si) {
//         case 'S':
//             console.log('ผอม')
//             break
//         case 'M':
//             console.log('ผอม')
//             break
//         case 'L':
//             console.log('ท้าม')
//             break
//         case 'XL':
//             console.log('อ้วน')
//             break
//         case '2XL':
//             console.log('อ้วน')
//             break
//     }

// }
// size('M')



// function fixedDecimal (n: number, digest: number) {
//     const x = n.toFixed(digest)
//     return x
// }
// console.log(fixedDecimal(20.25586, 50))



// function number20 (n: number) {
//     const x = n.toLocaleString()
//     return x 
// }

// console.log(number20(20000))



// function checkStringlength (name: string) {
//     console.log (name.length)
// }
// checkStringlength ('Mix')



// function getCharByIndex(msg: string, index: number) {
// const x = msg.charAt(index)
// return x

// }

// console.log(getCharByIndex('อยากกลับบ้าน',1))



// const str: string = 'อยากไปกินข้าว'

// console.log (str.includes('ข้าว'))



function checkStringIndex(str: string, search: string) {
    if (str.includes(search)) {
        console.log(str.indexOf(search))
    } else {
        console.log('ไม่พบคำค้นหา')
    }

}
checkStringIndex('อยากกลับบ้าน', 'ง')