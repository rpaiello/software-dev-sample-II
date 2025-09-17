let x;

// 1.1
x = parseInt(prompt("Shoot me a number"));
if (x % 2 == 0) {
    console.log("This number is even");
} else {
    console.log("This number is odd");
}

// 1.2
x = parseInt(prompt("How old r u"));
if (x >= 18) {
    console.log("You can vote in the US");
} else {
    console.log("You cannot vote in the US");
}

// 1.3
x = parseInt(prompt("Shoot me a number"));
if (x > 0) {
    console.log("This is a positive number");
} else if (x < 0) {
    console.log("This is a negative number");
} else {
    console.log("This is zero");
}

// 1.4
x = parseInt(prompt("Shoot me a number"));
if (x % 5 == 0 && x % 11 == 0) {
    console.log("This number is divisible by both 5 and 11");
} else {
    console.log("This number is not divisible by both 5 and 11");
}

// 2.1
for (x = 1; x <= 10; console.log(x++));

// 2.2
for (x = 5; x <= 100; x += 5) {
    console.log(x);
}

let y;

// 3.1
for (x = 1; x <= 20; x++) {
    y = x % 2 == 0 ? "Even" : "Odd";
    console.log(x,"→",y);
}

// 3.2
for (x = 7; x <= 140; x += 7) {
    y = x > 50 ? "Big number" : x;
    console.log(y);
}

// 3.3
for (x = 1; x <= 50; x++) {
    y = "";
    if (x % 3 == 0) {y += "Fizz";}
    if (x % 5 == 0) {y += "Buzz";}
    y = y == "" ? x : y;
    console.log(y);
}

// 3.4
y = 0;
for (x = 0; x <= 100; x++) {
    y = x % 2 == 0 ? y + x : y;
}
console.log(y);

// 3.5
// EXTREMELY INEFFICIENT PRIME-NUMBER-CHECKER
// Author: Robert P. Aiello

let z;
for (x = 1; x <= 50; x++) {
    z = true;
    for (y = 2; y < x; y++ && z) {
        if (x % y == 0) {z = false;}
    }
    if (z) {
        console.log(x + " is a prime number!!!")
    } else {
        console.log(x + " is NOT A PRIME NUMBER!!!")
    }
}