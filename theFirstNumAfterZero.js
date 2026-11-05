function theFirstNumberAfterZero(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) {
      console.log(numbers[i - 1]);
      console.log(numbers[i + 1]);
      break;
    }
  }
}

let num = [1, 2, 8, 0, 4, 3, 10, 7, 5];
console.log(num);
