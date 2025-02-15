import add, { subtract } from './function';
import { findMax } from './function2';

// let x:number | string = 10;
// x = 'hello';

// if (typeof x === 'number') {
//     console.log('x is a number');
// } else if (typeof x === 'string') {
//     console.log('x is a string');

// } else {
//     console.log('x is neither a number nor a string');
// }




const result = add(1,2) + 0;
console.log(result, "type of result: ", typeof result);

const result2 = subtract(1,2) + 0;
console.log(result2, "type of result2: ", typeof result2);

const number = [1,2,3,4,5];
const max = findMax(number);
console.log(max, "type of max: ", typeof max);