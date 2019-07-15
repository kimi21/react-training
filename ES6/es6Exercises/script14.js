/*
 * 14. Suppose you have a config object as given below
 * let config = {
 *      chartType:0,
 *      bullColor: 'green',
 *      bearColor: 'red',
 *      days: 30
 *  };
 * 
 * - complete the function signature below such that the function 
 * may be called with any config objects(null and undefined are not 
 * allowed as inputs).
 * - If any of the four keys are missing, subsitute their defualt values.
 * - The defualt values are the same as in the example configuration object.
 * 
 * 
 * -- function drawChart(data, //insert solution here) {
 *      //do not implement funciton body
 *  };
 * 
 */

let config = {
    chartType: 0,
    bullColor: 'green',
    bearColor: 'red',
    days: 30
};

function drawChart(data, {
        chartType=0, 
        bullColor='green', 
        bearColor='red', 
        days=30
    } = {}) {
    console.log(chartType, bullColor, bearColor, days);
};

drawChart(config);