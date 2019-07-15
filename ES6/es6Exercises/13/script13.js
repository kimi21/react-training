/*
 * 13. Create a destructuring expression that declares exactly 
 * one variable to retrieve x.A[2]
 * 
 * let x = { A: ['t', 'e', 's', 't']}
 */

let x = {
    A: [
        't',
        'e',
        's',
        't'
    ]
};

let {A: [,,A2]} = x;

console.log(A2);