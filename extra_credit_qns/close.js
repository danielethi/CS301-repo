function minAbsSumPair( arr,  arr_size)
{
  let  inv_count = 0;
  let l, r, min_sum, sum, min_l, min_r;
  
  /* Array should have at least two elements*/
  if(arr_size < 2)
  {
    console.log("Invalid Input");
    return;
  }
  
  /* Initialization of values */
  min_l = 0;
  min_r = 1;
  min_sum = arr[0] + arr[1];
  
  for(l = 0; l < arr_size - 1; l++)
  {
    for(r = l+1; r < arr_size; r++)
    {
      sum = arr[l] + arr[r];
      if(Math.abs(min_sum) > Math.abs(sum))
      {
        min_sum = sum;
        min_l = l;
        min_r = r;
      }
    }
  }
  
  console.log(" The two elements whose "+
                          "sum is minimum are "+
                    arr[min_l]+ " and "+arr[min_r]);
}

let result = minAbsSumPair([3,2,4,5,6,9,-1],7);
//console.log(result)