var x = [];
var sd = (n = i = a = b = ave = total = 0);

n = parseInt(prompt("How many items ?"));
console.log(typeof n);

for (var i = 0; i < n; i++) {
  x[i] = +prompt("Give me the number ?");
  ave += x[i];
}
ave /= n;
console.log(ave); // 3
for (var j = 0; j < n; j++) {
  a += Math.pow(x[j] - ave, 2);
  console.log(a); // 4

}
b = a / n;

sd = Math.sqrt(b);
console.log(sd); // 1.6

