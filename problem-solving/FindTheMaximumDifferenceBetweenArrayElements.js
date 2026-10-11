function FindTheMaximumDifferenceBetweenArrayElements(...arr){
  
let maximumNumber = arr[0]
let minimumNumer = arr[0]
for (let i =0 ; i < arr.length ; i++)
{
  if (arr[i] > maximumNumber)
  {
    maximumNumber = arr[i]
    
  }
 else if ( arr[i] < minimumNumer )
 {
      minimumNumer= arr[i]
 }
}
result =maximumNumber-minimumNumer
return result
}


console.log (FindTheMaximumDifferenceBetweenArrayElements(2,5,12,23,9))