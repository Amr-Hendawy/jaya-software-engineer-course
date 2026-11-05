<<<<<<< HEAD:rotateArrayElementsRight.js
// let newArray = 0;
// function arrayNum(index, ...arr) {
//   newArray = arr.splice(-index, arr.length);
//   arr.unshift(newArray);
//   return arr;
// }
// console.log(arrayNum(2, 1, 2, 3, 4, 5, 6));
// function rotateArrayElementsRight(arr) {
//   let lastElement = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = lastElement;
//   return arr;
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(rotateArrayElementsRight(numbers));

// original [1,2,3,4,5]
// Step1 [1,2,3,4,4]
// Step2 [1,2,3,3,5]
// Step3 [1,2,2,3,4]
// Step4 [1,1,2,3,4]
// Step5 [5,1,2,3,4]

function rotateArrayElementsRightWithTarget(arr, k) {
  let n = arr.length;
  if (n === 0) return arr;
  k = k % n;

  for (let j = 0; j < k; j++) {
    let lastElement = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
  }

  return arr;
}

let nums = [1,2,3,4,5,6];

console.log(rotateArrayElementsRightWithTarget(nums, 3));
=======
let newArray = 0;
function arrayNum(index, ...arr) {
  newArray = arr.splice(-index, arr.length);
  arr.unshift(newArray);
  return arr;
}
console.log(arrayNum(2, 1, 2, 3, 4, 5, 6));
>>>>>>> origin/problem-solving:problem-solving/rotateArrayElementsRight.js
