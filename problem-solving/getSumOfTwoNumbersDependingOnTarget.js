function findTwoNumbers(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let theNum = target - numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === theNum) {
        console.log(numbers[i], numbers[j]);
      }
    }
  }
}

findTwoNumbers([1, 3, 6, 2, 0, 15], 21);
