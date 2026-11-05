function removeDuplicatedNumbers(...arr) {
  let arrDuplicated = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log(arr[j]);
        arrDuplicated.push(arr[j]);
      }
    }
  }
}

removeDuplicatedNumbers(6, 2, 10, 8, 4, 10, 8, 6, 4);
console.log(arrDuplicated);
