function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice()
        for(let j=0;j<arr1.length;j++){
        localArray.splice(n,0,arr1[j])
        n++
        }
    
    return localArray;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))