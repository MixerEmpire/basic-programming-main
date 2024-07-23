function add(a: number, b: number) {
    return a = b
}

console.log(add(5, 8))



function remove(a: number, b: number) {
    return a - b
}
console.log(remove(4, 7))



function adds(a: number, b: number) {
    return a * b
}
console.log(adds(50, 100))


function grade(homework: number, midterm: number, final: number) {
    let scored: number = homework + midterm + final

    if (scored < 50) {
        return 'เกรด F'
    } else if (scored < 60) {
        return 'เกรด D'
    } else if (scored < 70) {
        return 'เกรด C'
    } else if (scored < 80) {
        return 'เกรด B'
    } else {
        return 'เกรด A'
    }
}
console.log(grade(2, 10, 20))