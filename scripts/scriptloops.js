// let i = parseInt(prompt("Shoot me a whole number", 0));
// let j = parseInt(prompt("Shoot me another whole number", 0));
// let k = parseInt(prompt("Shoot me a third and final whole number", 0));

// if ((i >= j) && (i >= k)) {
//     if (j >= k) {
//         console.log(i,j,k);
//     }
//     else {
//         console.log(i,k,j);
//     }
// }
// else if ((k >= j) && (k >= i)) {
//     if (j >= i) {
//         console.log(k,j,i);
//     }
//     else {
//         console.log(k,i,j);
//     }
// }
// else {
//     if (i >= k) {
//         console.log(j,i,k);
//     }
//     else {
//         console.log(j,k,i);
//     }
// }

// let a = parseInt(prompt("From:", 10));
// let b = parseInt(prompt("To:", 0));
// let c = (a - b);
// if (c < 0) {
//     for (a; a <= b; a++) {
//         console.log(a);
//     }
// }
// else if (c > 0) {
//     for (a; a >= b; a--) {
//         console.log(a);
//     }
// }
// else {
//     console.log(a);
// }

// for (let s = 1; s <= 100; s++) {
//     if (s % 7 == 0) {console.log(s);}
// }

// let colors = ["red", "green", "blue", "yellow", "black", "purple", "white", "pink"];

// for (let k = colors.length - 1; k >= 0; k--) {
//     console.log(colors[k]);
// }

// let grade = parseInt(prompt("What did you get on the test"))

// if (grade >= 90) {
//     console.log("A");
// } else if (grade >= 75) {
//     console.log("B");
// } else if (grade >= 65) {
//     console.log("C");
// } else {
//     console.log("Failed");
// }

// function hardwareStore() {
//     let input;
//     let inventory = ['hammer', 'screwdriver', 'utility knife', 'bleach', 'ammonia', 'sandpaper', 'saw',];
//     while(true) {
//         input = prompt("Hi welcome to the hardware store what do you want (or type quit to quit)");
//         input = input.toLowerCase();
//         if (input == "quit") {
//             console.log("Okay byeeeee")
//             break;
//         }
//         else if (inventory.includes(input)) {
//             console.log(input+"? Yeah we have that")
//         }
//         else {
//             console.log("No we dont have that try again")
//         }
//     }
// }

// hardwareStore();

let input = prompt("");
console.log(input);