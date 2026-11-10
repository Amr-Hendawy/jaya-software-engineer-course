let arr = "aaabbbcccd";
let z = []
let counter= 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1] || arr[i - 1] === arr[i]) {
counter = counter + 1
z.push(arr[i]+ counter)
  }
}
console.log(z)
