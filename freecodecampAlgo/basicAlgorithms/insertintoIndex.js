function getIndexToIns(arr, num) {
    //sorts in ascending order
    arr.sort((a,b)=>a-b)

    for(var i=0;i<arr.length;i++){
        if(arr[i]>=num){
            return i;
        }
    }

    return arr.length
  }
  console.log(getIndexToIns([5, 3, 20, 3], 5))