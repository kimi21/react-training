function checkForEven(num) {
    return num % 2 === 0 ? true : false;
}

function squared(num) {
    return num * num;
}

function mapperFns(num, index) {
    let newObj = {};
    // newObj.isEven = checkForEven(num);
    // newObj.number = num;
    // newObj.squared = squared(num);

    newObj.isEven = ((num) => num % 2 === 0 ? true : false)(num);
    newObj.number = num;
    newObj.squared = (num) => num * num;
    
    return newObj;
}

const arr = [1,2,3];
const reformattedArr = arr.map(mapperFns);
console.log(reformattedArr);



