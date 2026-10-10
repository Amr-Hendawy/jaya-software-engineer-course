// const start = performance.now();

// function secoundPeakNumber(...num) {
//   let result = 0;
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] > num[j]) {
//         num.splice(i, 1);
//         if (num[i] > num[j]) num.splice(i, 1);
//         result = num.splice(i, 1);
//       }
//     }
//   }
//   return result;
// }

// console.log(secoundPeakNumber(1, 2, 3, 7, 4));

// const end = performance.now();

// console.log(`Excution time: ${end - start} ms`);

function findSecondPeakNumber(...numbers) {
  let max = -infinty;
  let secondMax = -infinty;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      secondMax = max;
      max = numbers[i];
    } else if (number[i] > secondMax && numbers[i] < max) {
      secondMax = numbers[i];
    }
  }
  return secondMax === -infinty ? null : secondMax;
}
const start = performance.now();

console.log(1, 2, 3, 7, 4); // 4
console.log(10, 5, 8, 3); //8
console.log(10, 5, 8, 3);
console.log(5, 5, 5); // null
console.log(10); // null
console.log(); // null

const end = performance.now();

console.log(`Excution time: ${end - start} ms`);
// fomo fearing of missing out