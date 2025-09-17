function minimum(numbers) {
    let x = numbers[0];
    for (let y = 0; y < numbers.length; y++) {x = x > numbers[y] ? numbers[y] : x;}
    return x;
}

function secondminimum(numbers) {
    let x1 = numbers[0];
    let x2 = numbers[0];
    for (let y = 0; y < numbers.length; y++) {
        x1 = x1 > numbers[y] ? numbers[y] : x1;
    }
    for (let y = 0; y < numbers.length; y++) {
        x2 = x2 > numbers[y] && numbers[y] > x1 ? numbers[y] : x2;
    }
    return x2;
}

function maximum(numbers) {
    let x = numbers[0];
    for (let y = 0; y < numbers.length; y++) {x = x < numbers[y] ? numbers[y] : x;}
    return x;
}

function sigma(numbers) {
    let x = 0;
    for (let y = 0; y < numbers.length; y++) {x += numbers[y];}
    return y;
}

function scumsearch(numbers, target) {
    let i = 0;
    while (numbers[i] != target) {
        if (i == numbers.length - 1) {return null;}
        i++;
    }
    return i;
}

function quantityof(numbers, target) {
    let output = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == target) {output++}
    }
    return output;
}

let example = [70, 60, 5, 13, 20, 2, 1]
console.log(`\
    Minimum (Expected: 1) ${minimum(example)}
    Second Minimum (Expected: 5) ${secondminimum(example)}
    Quantity of (Expected: 1) ${quantityof(example, 5)}\
    `)