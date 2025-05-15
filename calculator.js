let calc;
const add = function(...numToCalc) {
    const numbers = [];
    numbers.push(...numToCalc);
    const addNums = (a, b)=> a + b;
    calc = numToCalc.reduce(addNums);
	return calc;
};