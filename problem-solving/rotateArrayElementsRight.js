let newArray = 0;
function arrayNum(index, ...arr) {
  newArray = arr.splice(-index, arr.length);
  arr.unshift(newArray);
  return arr;
}
console.log(arrayNum(2, 1, 2, 3, 4, 5, 6));
