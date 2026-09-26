let duplicatearr = [];

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      
      if (arr[i] === arr[j]) {
        return duplicatearr.push(arr[j])
      }
    }
  }
}


console.log(removeDuplicate([2, 4, 3, 3, 5, 6, 9, 2, 7, 5, 6]))
