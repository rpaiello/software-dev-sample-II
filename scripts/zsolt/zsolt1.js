let u0; //undef
let n0 = null; //null
let n1 = 1; //number
let s0 = "Hello" //string
let s1 = new Symbol('hi'); //symbol
let n2 = 4n; //bigint
let o0 = {}; //object

console.log(`\
    u0 undefined: ${u0}
    n0 null: ${n0}
    n1 number: ${n1}
    n2 bigint: ${n2}
    s0 string: ${s0}
    o0 object: ${o0}
    `)