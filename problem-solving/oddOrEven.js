function evenOrOddNumber(num) {
  if (num % 2 === 0) {
    return "even";
  } else if (num % 2 === 1) {
    return "Odd";
  } else if (num % 2 !== 0 || num % 2 === 1) {
    return "It may be Even or Odd depends on sum but the summation doesn't reconize it";
  } else {
    return "Zero";
  }
}
console.log(evenOrOddNumber(5));
