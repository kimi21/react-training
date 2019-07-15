/*
 * 8. Create a function to extract the value 'Chestor Lane'
 * from the given object
 */

 var person = {
    first: 'Mohan',
    last: 'Singh',
    address: {
        lines: [
            'Sector 47',
            'Chestor Lane',
            'Apt 23'
        ],
        city: 'Gurgaon',
        state: 'Haryana'
    }
}

function extract() {
    var {address: {lines: [,lane]}} = person;
    console.log(lane);
}

extract();
