// const start = performance.now();
// function moveZerosToEnd(...arr) {
//   // let arr = [1, 4, 0, 3, 0, 1, 2, 3, 6, 8, 0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arrAfterSplice = arr.splice(i, 1);
//       arr.push(arrAfterSplice[0]);
//     }
//   }
//   return arr;
// }

// console.log(moveZerosToEnd(1, 4, 0, 3, 0, 1, 2, 3, 6, 8, 0));
// const end = performance.now();
// console.log(`Excution time: ${end - start} ms`);

// function moveZerosToEnd(numbers) {
//   let index = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== 0) {
//       numbers[index] = numbers[i];
//       index++;
//     }
//   }
//   while (index < numbers.length) {
//     numbers[index] = 0;
//     index++;
//   }
//   return numbers;
// }

// console.log(moveZerosToEnd([1, 0, 3, 5, 5, 0, 1, 3, 6, 7, 0, 0, 7, 8, 0, 9]));

// function moveZerosToEnd(...numbers) {
//   let number = "";
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 0) {
//       number += numbers[i];
//     } else {
//       number = numbers[i] + number;
//     }
//   }
//   return number.split("");
// }

// console.log(moveZerosToEnd(9, 0, 21, 0, 3, 4, 0, 7, 0, 1));

function moveZerosToEnd(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      // Destructuring assignment
      [numbers[i], numbers[count]] = [numbers[count], numbers[i]];
      count++;
    }
  }
  return numbers;
}
console.log(moveZerosToEnd([9, 0, 2, 0, 3, 4, 0, 7, 0]));

[1, 0, 3, 5, 0, 2][(0, 1, 2, 3, 4, 5)];

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); //20
console.log(b); //10
