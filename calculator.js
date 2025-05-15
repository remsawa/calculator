let calc;

function getCalculation(){

};

const add = function(...numToCalc) {
    const numbers = [];
    numbers.push(...numToCalc);
    const addNums = (a, b)=> a + b;
    calc = numToCalc.reduce(addNums);
	return calc;
};

const subtract = function(...numToCalc) {
    const numbers = [];
    numbers.push(...numToCalc);
    const subNums = (a, b)=> a - b;
    calc = numToCalc.reduce(subNums);
	return calc;
};

const multiply = function(...numToCalc) {
    const numbers = [];
    const multiplyNums = (a, b)=> a * b;
    calc = numToCalc.reduce(multiplyNums);
    return calc;
  };

  const divide = function(...numToCalc) {
    const numbers = [];
    const divideNums = (a, b)=> a / b;
    calc = numToCalc.reduce(divideNums);
    return calc;
  };