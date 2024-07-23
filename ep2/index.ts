function add(a: number, b: number) { //ฟังชั่นเอาตัวเลขมา+ - *
    return a = b //ค่าที่จะแสดงการ a + b
}

console.log(add(5, 8)) //แสดงค่า+



function remove(a: number, b: number) { //ฟังชั่นเอาตัวเลขมา+ - *
    return a - b //ค่าที่จะแสดงการ a - b
}
console.log(remove(4, 7)) //แสดงค่า-



function adds(a: number, b: number) { //ฟังชั่นเอาตัวเลขมา+ - *
    return a * b //ค่าที่จะแสดงการ *
}
console.log(adds(50, 100)) //แสดงค่า*


function grade(homework: number, midterm: number, final: number) { //ฟังชั่นการคำนวนการบ้าน สอบmidterm กับ final
    let scored: number = homework + midterm + final //คำนวณเกรด

    if (scored < 50) { //ตรวจสอบเกรดตามตัวเลข
        return 'เกรด F' // เกรด F

    } else if (scored < 60) { //ตรวจสอบเกรดตามตัวเลข
        return 'เกรด D' //เกรด D

    } else if (scored < 70) { //ตรวจสอบเกรดตามตัวเลข
        return 'เกรด C' // เกรด C

    } else if (scored < 80) { //ตรวจสอบเกรดตามตัวเลข
        return 'เกรด B' // เกรด B

    } else {                      //ตรวจสอบเกรดตามตัวเลข
        return 'เกรด A' // เกรด A
    }
}
console.log(grade(2, 10, 20)) //แสดงค่าเกรดตัวเลขที่ได้ 2 + 10 + 20