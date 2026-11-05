function findSecondRepeatedNumber(...arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      newarr.push(arr[i]);
    }
  }
  if (newarr[0] !== newarr[1]) {
  }
  return newarr[1];
}

console.log(findSecondRepeatedNumber(10, 20, 30, 20, 40, 30));
