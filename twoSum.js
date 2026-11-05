let num = [5, 6, 2, 3, 0, 1, 7, 8, 9, 4];
let resultEven = [];
let resultOdd = [];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0 && num[i] !== 0) {
    resultEven.push(num[i]);
  } else if (num[i] % 2 !== 0) {
    resultOdd.push(num[i]);
  }
}

console.log(resultEven);
console.log("resultEven is " + resultEven.length);
console.log(resultOdd);
console.log("resultOdd is " + resultOdd.length);

// var num= 1
// if ( num% 2 == 0 )
// {
//   console.log (num)

// }else {
//   console.log (num)
// }
