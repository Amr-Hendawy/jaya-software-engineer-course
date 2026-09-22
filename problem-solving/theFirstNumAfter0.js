let num = [1, 2, 8, 0 , 4, 3, 10, 7, 5];
for (let i = 0; i < num.length; i++) {
  if (num[i] == 0) {
    console.log(num[i - 1]);
    console.log(num[i + 1]);
  }
}
