let arr = [1, 2, 3, 4, 6, 7, 9];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] - arr[i] == 1) {
  
  } else if (arr[i + 1] - arr[i] !== 1) {
    console.log(`The missing numbers are  ${arr[i] + 1}`);
  }
}
