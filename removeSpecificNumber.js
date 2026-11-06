function removeSpecificNumber(target, ...num) {
  for (let i = 0; i < num.length; i++) {
    if (target === num[i]) {
      num.splice(i, 1);
    }
  }
  return num;
}

console.log(removeSpecificNumber(2, 1, 2, 3, 2, 3, 4, 3));
