


function peakNumber(...arr)
{
    for (let i = 0 ; i < arr.length ; i++)
{
    if (arr[i-1] < arr[i] && arr[i]>arr[i+1])
    {
       console.log(arr[i]) 
    }
}
}

peakNumber(2,4,3,10,1);








