

function fakeZero(zeroArr)
{
   for (let i =0 ; i < zeroArr.length; i++)
{
switch (zeroArr[i]){
case 0:
console.log (i)
} 
}
zeroArr.splice(5,1)
console.log (zeroArr)
}

fakeZero([1,2,3,4,5,0,6,7])

    

