/*
 * 4. Write a function that calculates the prices after tax
 * calculation for each price element in the prices array
 * 
 * - result should be pricesWithTax
 * - Assume taxRate to be 0.07
 * 
 * --use currying and ES6 construct to solve this
 */

var prices = [1.1, 2.32, 3.68, 4.9];

function calculatePrice(prices) {
    return (taxRate) => {
        return prices.map(price => {
            const res = price + (price * taxRate);
            return res;
        });
    }
}

var pricesWithTax = calculatePrice(prices);
pricesWithTax(0.07);
