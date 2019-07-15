/* 
 * 12. Parse day, month, year from date('2025-09-26')
 * 
 * -- Use destructuring to solve
 */
let date = '2025-09-26';
let [year, month, day] = date.split('-');
console.log(year, month, day);