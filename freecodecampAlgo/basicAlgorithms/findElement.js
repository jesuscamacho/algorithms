function findElement(arr, func) {
    var newArr = arr.filter(num=>func(num));
    if(newArr.size==0){
        return undefined;
    }else{
        return newArr[0]
    }
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))