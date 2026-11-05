function findNonRepeatedLetters(letters) {
  for (let i = 0; i < letters.length; i++) {
    if (letters.indexOf(letters[i]) === letters.lastIndexOf(letters[i])) {
      return letters[i];
    }
  }
  return null;
}

console.log(findNonRepeatedLetters("wwrrtsssddpp"));

// for (let i = 0; i < num.length; i++) {
//     if (num[i] !== num[j]) {
//      num.splice(i,1)
//     //  num.splice(j,1)
// }
// } console.log(num)
