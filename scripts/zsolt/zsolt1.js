// let u0; //undef
// let n0 = null; //null
// let n1 = 1; //number
// let s0 = "Hello" //string
// let s1 = new Symbol('hi'); //symbol
// let n2 = 4n; //bigint
// let o0 = {}; //object

// console.log(`\
//     u0 undefined: ${u0}
//     n0 null: ${n0}
//     n1 number: ${n1}
//     n2 bigint: ${n2}
//     s0 string: ${s0}
//     o0 object: ${o0}`)

// let booking = {
//     roomNum : 101,
//     guests: ["Peter Doobes", "John Doe", "Jonas Pecker"],
//     quantity : 3,
//     bookingStart : "09012025",
//     bookingEnd : "09092025",
//     totalPriceUSD : "550.30",
// }

// let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// let input = prompt("Enter a name:")
// if (input.length === 0) {console.log("No you didn't");}
// else if (input.length < 9) {console.log("short name");}
// else {console.log("long name");}

let secretVal = Math.floor(Math.random() * 5) + 1;
switch (secretVal) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("None");
}

let input;
while (true) {
    input = parseInt(prompt("Give me a number between 1 and 100"))
    if (input < 1 || input > 100 || Number.isNaN(input) || typeof input !== 'number') {}
    else {break;}
}

let rangeLowerInitial
let rangeLower = rangeLowerInitial;
let rangeHigher = 100;
function getrange() {
    if (rangeLowerA == rangeLowerInitial && rangeHigher == rangeLowerInitial + 1) {
        return 0;
    }
    else {return Math.max(Math.floor((rangeHigher-rangeLower)/2), 1);}
}
let guess;
input = prompt("Give me a number between 1 and 100 (again) and I will try to guess it")
while (true) {
    guess = rangeLower + getrange();
    if (guess == input) {console.log(input, "match"); break;}
    if (guess < input) {
        console.log(guess, "higher")
        rangeLower = guess;
    }
    if (guess > input) {
        console.log(guess, "lower")
        rangeHigher = guess;
    }
}

rangeLower = 1;
rangeHigher = 100;
alert("Think of a number between 1 and 100...")
while (true) {
    guess = rangeLower + getrange();
    input = prompt("Is "+guess+" HIGHER, LOWER, or a MATCH to your number?")
    if (input.toLowerCase() == "match") {alert("YAY"); break;}
    if (input.toLowerCase() == "lower") {
        rangeLower = guess;
    }
    if (input.toLowerCase() == "higher") {
        rangeHigher = guess;
    }
}