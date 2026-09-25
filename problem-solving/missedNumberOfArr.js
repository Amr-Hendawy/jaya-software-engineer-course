// let arr = [1, 2, 3, 4, 6, 7, 9];

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i + 1] - arr[i] == 1) {

//   } else if (arr[i + 1] - arr[i] !== 1) {
//     console.log(`The missing numbers are  ${arr[i] + 1}`);
//   }
// }

// function missedNumberOfArr(arr) {
//   let expected = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== expected) {
//       console.log("Missing", expected);
//       expected++;
//     }
//     expected++;
//   }
// }

// let arr = [1, 2, 3, 4, 6, 7, 9];
// missedNumberOfArr(arr);

// function missedNumberOfArr(arr) {
//   let first = arr[0];
//   let last = arr[arr.length - 1];

//   let expectedSum = 0;
//   let actualSum = 0;

//   for (let i = first; i <= last; i++) {
//     expectedSum += i;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }
//   console.log(expectedSum - actualSum);
// }

// let arr = [1, 2, 3, 4, 6, 7, 9];
// missedNumberOfArr(arr);
