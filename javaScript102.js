function printNumbers(start, end) {
    let counter = start
    while (counter <= end) {
        console.log(counter)
        counter++;
    }
}
printNumbers(1, 10)

function printNumbers2(start, end) {
    for (let counter = 0; count <= end; counter++) {
        console.log(counter)
    }
}
printNumbers2(1, 10)

function printSquare(size) {
    let lines = 0
    let square =''
    let star = '*'
    while (lines < size) {
        lines = lines + 1
        square += star.repeat(size) + "\n"
    }
    console.log(square)
}
printSquare(5)