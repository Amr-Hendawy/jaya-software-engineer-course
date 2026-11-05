function calculateAverageAndHalfLength(...arr) {
  // let arr = [6,7,8,9,20]
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  // console.log (average)
  let theMiddle = arr.length / 2;
  let theintgerNumber = Math.floor(theMiddle);
  return `the average is ${average} and the division is ${theintgerNumber} `;
}

console.log(calculateAverageAndHalfLength(6, 7, 8, 9, 20));
