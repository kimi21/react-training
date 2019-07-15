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
