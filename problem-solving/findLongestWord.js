function findLongestWord(theWord) {
  let theArray = theWord.split(" ");
  let maximuimStringLength = theArray[0].length;
  for (let i = 0; i < theArray.length; i++) {
    if (maximuimStringLength  < theArray[i].length) {
      maximuimStringLength  = theArray[i].length;
      longestWord = theArray[i];
    }
  }
  console.log(longestWord);
}

findLongestWord("hello jaya we are in javascript course");
