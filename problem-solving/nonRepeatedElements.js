let num = [1, 2, 3, 1, 5, 7, 5, 6, 8, 6, 9, 7];

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] !== num[j]) {
     num.splice(i,1)
    //  num.splice(j,1)
  }
}
} console.log(num)
// XXXXXXXXXXXXXXXXXXXXXXX



