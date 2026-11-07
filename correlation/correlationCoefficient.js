n = +prompt("please enter the length of array");
let x = [];
let y = [];
let i = 0;
let r = 0;
let PowerX = 0;
let PowerY = 0;
let totalSumX = 0;
let totalSumY = 0;
let resultXy = 0;
let totalPowX = 0;
let totalPowY = 0;
let numerator = 0;
let denominator = 0;

function correlationcoefficient() {
  for (let i = 0; i < n; i++) {
    x[i] = +prompt("please enter the x arr");
    x.push(x[i]);
    totalSumX += x[i];
    PowerX += x[i] ** 2; // ΣX2

    totalPowX = totalSumX ** 2; // (ΣX)2
  }
  for (let i = 0; i < n; i++) {
    y[i] = +prompt("please enter the y arr");
    y.push(y[i]);
    resultXy += y[i] * x[i];
    totalSumY += y[i];
    PowerY += y[i] ** 2;
    totalPowY = totalSumY ** 2;
  }

  numerator = n * resultXy - totalSumX * totalSumY;
  denominator = Math.sqrt((n * PowerX - totalPowX) * (n * PowerY - totalPowY));
  r = numerator / denominator;
}

correlationcoefficient();
console.log(denominator);
console.log(numerator);
console.log(r);
