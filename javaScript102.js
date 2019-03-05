function printNumbers(start, end) {
    let counter = start
    while (counter <= end) {
        console.log(counter)
        counter++;
    }
}
printNumbers(1, 10)

function printNumbers2(start, end) {
    for (let counter = 0; counter <= end; counter++) {
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

// function printBox(width, height) {
//     let star  = "*"
//     for (let height = 0; height <= height; height++) {
//         if (boxHeight.includes(height[0]) || boxHeight.includes[height-1]) {
//             console.log(star.repeat(width))
//         } else {
//             console.log(star + (" ".repeat(width-2)) + star)
//         }
//     }
// }
// printBox(5, 5)

function printBox(width, height) {
    let star = "*"
    let empty = ' '
    for (let heightRange = 0; heightRange <= height; heightRange++) {
        if ([0].includes(heightRange) || [(height-1)].includes(heightRange)) {
            console.log(star.repeat(width))
        } else {
            console.log(star + (empty.repeat(width-2)) + star)
        }
    }
}
printBox(5,6)

function printBanner(string) {
    let Banner = ''
    star = "*"
    bannerLength = string.length
    counter = 0
    while (counter < 3) {
        if (counter === 0 || counter === 2) {
            console.log(star.repeat(bannerLength + 2))
            counter += 1
        } else if (counter === 1) {
            console.log(star + string + star)
            counter += 1
    } 
}
}
printBanner('Digital Crafts')

function factors(number) {
    const numFactors = number => Array
        .from(Array(number + 1), (_, i) => i)
        .filter(i => number % i == 0)
    console.log(numFactors(number))
}
factors(36)

function cipher(string, offset) {
    // const alph = 'abcdefghijklmnopqrstuvwxyz '
    let newSentence = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        let ascii = string.charCodeAt(i);
        // return ascii;
        if ((ascii) >=65 && (ascii) <= 90) {
            letter = String.fromCharCode(((ascii - 65 + offset) % 26) + 65);
            
        } else if ((ascii) >=97 && (ascii) <= 122) {
            letter = String.fromCharCode(((ascii - 97 + offset) % 26) + 97);
            
        }
        newSentence += letter;
    }
    return newSentence;
}
console.log(cipher('The cat in the hat', 14));

// Gur png va  gur ung

function decipher(string, offset) {
    let decipherString = '';
    for (let i = 0; i <  string.length; i++) {
        let letter = string[i]
        let ascii = string.charCodeAt(i);
        if ((ascii) >= 65  && (ascii) <= 90) {
            letter = String.fromCharCode(((ascii - 65 + offset) % 26) + 65);

        } else if ((ascii)  >= 97 && (ascii ) <= 122) {
            letter = String.fromCharCode(((ascii - 97 + offset) % 26)  +  97);
        }
        decipherString += letter;
    }
    return decipherString
}

console.log(decipher("Gur png  va gur ung", 13))

let leetDictionary = {
A: 4,
E: 3,
G: 6,
I: 1,
O: 0,
S: 5,
T: 7,
}

function transl33t(originalString) {
    let result = '';

    // loop through each letter in origional
    // if its in the dictionary, and if it is
    // put its value in `result`
    for (let i = 0; i < originalString.length; i++) {
        let theLetter = originalString[i].toUpperCase();
        console.log(theLetter);
        console.log(leetDictionary[theLetter]);
        if (leetDictionary[theLetter] || leetDictionary[theLetter] === 0) {
            result += leetDictionary[theLetter]
        } else {
            result += theLetter
        }
    }
    return result;
}
transl33t('hello kitty')