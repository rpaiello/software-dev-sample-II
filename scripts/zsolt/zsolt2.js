// function factorial(q) {
//     if (q == 0 || q == 1) {
//         return 1;
//     } else {
//         return q * factorial(q-1);
//     }
// }

// console.log(factorial(10))

// let pete = {
//     id: '123456',
//     first: 'Peter',
//     last: 'Doobes',
// }

// function logname({first, last}) { //Destructuring
//     console.log(first, last);
// }

// logname(pete);


// //Spread + Rest
// function summation(...nums) { //The "...nums" is a REST PARAMETER, indicating a variable number of arguments
//     let sum = 0;
//     for (val of [...nums]) {
//         sum += val;
//     }
//     return sum;
// }

// console.log(summation(10, 6, 4, 0, 0, 100));
// let restValues = [1, 2, 5];
// console.log(summation(...restValues));
// console.log(summation());

// function summationRecursive(first, ...nums) {
//     if (typeof first === 'undefined') {return 0}
//     else {return first + summationRecursive(...nums)}
// }

// console.log(summationRecursive(10, 6, 4, 0, 0, 100));
// console.log(summationRecursive(...restValues));
// console.log(summationRecursive());

// //Object deep-cloning
// let myTable = [
//     {first: 'A', second: 'B'},
//     {first: 'C', second: 'D'},
// ]

// function addThirdKey(table) {
//     let inTable = structuredClone(table);
//     for (record of inTable) {
//         record.third = 1;
//     }
//     return inTable;
// }

// console.table(myTable);
// console.table(addThirdKey(myTable))
// console.table(myTable); //Function should not change original myTable

// E X E R C I S E S

//1. Fibonacci
function Fibonacci(index) {
    switch (index) {
        case 0:
            return 0;
            break;
        case 1:
            return 1;
        default:
            return Fibonacci(index - 2) + Fibonacci(index - 1);
            break;
    }
}

//2. Array increment
function plus1Array(nums) {
    let thisNums = [...nums];
    for (let i = 0; i < thisNums.length; i++) {
        thisNums[i] += 1;
    }
    return thisNums;
}

// let odds = [1, 3, 5, 7, 9];
// console.log(odds);
// console.log(plus1Array(odds));
// console.log(odds);

//3. Markup
function unorderedList(items) {
    let output = "<ul>\n";
    for (article of items) {
        output += `\t<li>${article}<li>\n`;
    }
    output += "<ul>";
    return output;
}

//console.log(unorderedList(["Pizza","Cookies","Hotdogs"]));

//4. Table from 3x3 array
function table3x3(items) {
    let output = "<table>\n";
    for (let x = 0; x < 9; x++) {
        if (x % 3 == 0) {output += "\t<tr>\n"};
        if (Math.floor(x/3) == 0) {output += `\t\t<th>${items[0][x%3]}</th>\n`;}
        else {output += `\t\t<td>${items[Math.floor(x/3)][x%3]}</td>\n`;}
        if (x % 3 == 2) {output += "\t</tr>\n";}
    }
    output += "</table>"
    return output;
}

let threebythree = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(table3x3(threebythree));

//Bonus: Table from any size 2D array
function tableXxX(items) {
    let output = "<table>\n";
    let width = items[0].length;
    let height = items.length;
    for (let x = 0; x < (height * width); x++) {
        if (x % width == 0) {output += "\t<tr>\n"};
        if (Math.floor(x/width) == 0) {output += `\t\t<th>${items[0][x%width]}</th>\n`;}
        else {output += `\t\t<td>${items[Math.floor(x/width)][x%width]}</td>\n`;}
        if (x % width == (width - 1)) {output += "\t</tr>\n";}
    }
    output += "</table>"
    return output;
}
console.log(tableXxX(threebythree));
let fivebyseven = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35]
]
console.log(tableXxX(fivebyseven));

function solveQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
      return [];  
    }
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];  
  }
  let result = solveQuadratic(1, -3, 2);  
  console.log(result); 