function secoundPeakNumber(...num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        num.splice(i, 1);
        if (num[i] > num[j]) num.splice(i, 1);
        result = num.splice(i, 1);
      }
    }
  }
  return result;
}

console.log(secoundPeakNumber(1, 2, 3, 7, 4));
