// console.log(2+2);
// console.log(10*4);

let x = 10; //variables
let y = 20;
let z;

z = x + y;
console.log(x+" + "+y+" = "+z);
z = x - y;
console.log(x+" - "+y+" = "+z);
z = x * y;
console.log(x+" ✕ "+y+" = "+z);
z = y / x;
console.log(y+" ÷ "+x+" = "+z);

x = "Hello ";
y = "world";
z = "!";

console.log(15/5+15%5);

console.log(x+y+z);

console.log("1 = 1: "+(1==1));
console.log("1 = 0: "+(1==0));

grade = "A";

switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("Pass");
        break;

    case "D":
    case "F":
        console.log("Fail");
        break;

    default:
        console.log("What");
        break;
}