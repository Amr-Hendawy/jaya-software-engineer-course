function positiveOrn(num) {
  if (num > 0) {
    return "this num is positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "0";
  }
}
console.log(positiveOrn(10));
