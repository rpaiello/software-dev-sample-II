//1. Even or Odd
function q1(number) {
    return number % 2 == 0 ? "even" : "odd";
}

//2. Autocalculator
function q2(op1, op2) {
    let output = new Array(4);
    output[0] = op1 + op2;
    output[1] = op1 - op2;
    output[2] = op1 * op2;
    output[3] = op2 === 0 ? 0 : op1 / op2;
    return output;
}

//3. Loop printer
function q3() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}

//4. FizzBuzz
function q4() {
    let output;
    for (let i = 1; i <= 30; i++) {
        output = "";
        if (i % 3 == 0) {output += "Fizz";}
        if (i % 5 == 0) {output += "Buzz";}
        output = output === "" ? i : output;
        console.log(output);
    }
}

//5. Calendar switch
function q5(index) {
    switch (index) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Logsday");
            break;
    }
}

//6. Square
let q6 = (x) => x**2;

//7. 5 Fruits
let fruitStand = ["lemon", "apple", "banana", "mango", "durian"];
let q7 = (input) => fruitStand.includes(input.toLowerCase());

//8. Student object
let q8 = {
    name : "Peter Doobes",
    age : 20,
    grade : "C",
    showInfo : function(){
        console.log(`\
Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}\
            `)
    }
}

//9. Library object
let q9 = {
    name : "Professor Nutbutter's Library of Treats",
    inventory : [
        "Fear and Loathing in Las Vegas",
        "The Get Rich and Become God Method",
        "House of Leaves",
        "Blood Meridian",
        "Consider the Lobster"
    ],
    listInventory : function(){
        console.log("AVAILABLE BOOKS:")
        for (let book of this.inventory) {
            console.log("\t"+book);
        }
    }
}

//10. Report card
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
        this.getGrade = function () {
            if (this.marks >= 90) { return "Grade A"; }
            if (this.marks >= 75) { return "Grade B"; }
            if (this.marks >= 50) { return "Grade C"; }
            return "Fail!";
        };
        this.printGrade = function () {
            console.log(`${this.name} scored ${this.marks} → ${this.getGrade()}`);
        };
    }
}
function q10(students){
    for (let student of students) {
        student.printGrade();
    }
}

//11. ATM
function q11(startingBalance = 1000) {
    let balance = startingBalance;
    let select;
    let input;
    while (true) {
        select = prompt(`\
            === SCUNGBANK ATM ===
            
            PLS CHOOSE AN OPTION:
            1. Check Balance
            2. Deposit
            3. Withdraw
            4. Quit`);
        if (select == 1) {
            alert(`YOUR BALANCE IS \$${balance}`);
        }
        if (select == 2) {
            input = prompt("ENTER AMOUNT:")
                if (input <= 0) {
                    alert("DEPOSIT FAILED! BAD INPUT");
                } else {
                    balance += parseFloat(input);
                    alert(`DEPOSIT SUCCESSFUL! Balance = \$${balance}`)
                }
        }
        if (select == 3) {
                input = prompt("ENTER AMOUNT:");
                if (input <= 0 || balance < input) {
                    alert("WITHDRAWL FAILED! INSUFFICIENT BALANCE or BAD INPUT");
                } else {
                    balance -= parseFloat(input);
                    alert(`WITHDRAWL SUCCESSFUL! Balance = \$${balance}`)
                }
        }
        if (select == 4) {break;}
    }
}

//COMPREHENSIVE TESTING SUITE!
let students = [new Student("Robert", 92), new Student("Jake", 67), new Student("Usman", 45)]
console.log(`\
    Q1:
    ${q1(1)} / Expected: "odd"
    ${q1(12)} / Exp: "even"
    
    Q2:
    ${q2(7, 3)} / Exp: [10, 4, 21, 2.33333334]
    ${q2(5, 0)} / Exp: [5, 5, 0, 0]
    
    Q3:
    ${q3()} / undefined, See above
    
    Q4:
    ${q4()} / undefined, See above
    
    Q5:
    ${q5(5)} / Exp: undefined, "Friday"
    ${q5(0)} / Exp: undefined, "Logsday"
    
    Q6:
    ${q6(3)} / Exp: 9
    ${q6(8)} / Exp: 64
    
    Q7: 
    ${q7("Durian")} / Exp: true
    ${q7("Lime")} / Exp: false
    
    Q8:
    ${q8.showInfo()} / undefined, See above
    
    Q9:
    ${q9.listInventory()} / undefined, See above
    
    Q10:
    ${q10(students)} / undefined, See above
    
    Q11:
    See prompt`)

q11();