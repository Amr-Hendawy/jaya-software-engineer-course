function pushZero(...arr) {
  // let arr = [1, 4, 0, 3, 0, 1, 2, 3, 6, 8, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arrAfterSplice = arr.splice(i, 1);
      arr.push(arrAfterSplice[0]);
    }
  }
  return arr;
}

console.log(pushZero(1, 4, 0, 3, 0, 1, 2, 3, 6, 8, 0));
