function largestOfFour(arr) {
    var newArr =[]
    var i,j,max=-1000;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(arr[i][j]>max){
                max = arr[i][j]
            }
            if(j==arr.length-1){
                newArr[i] = max
            }
        }
        max=-1000;
    }
    return newArr;
  }
  
  //console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

  function largestOfFour2(mainArray) {
    return mainArray.map(function (subArray){
        return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
          return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
        }, -1000);
      });
  }

  //console.log(largestOfFour2([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));


  //Map function----- can change elements in an array - returns one value
  var array=[1,4,7,4,54,234,4]
  var a = array.map((x)=>{
    return x+1
  })
  var b = array.map((x)=>x+1)

  var animals = [
      {name:'joe',species:'dog'},
      {name:'sam',species:'cat'},
      {name:'willy',species:'dog'},
      {name:'paco',species:'bird'}
  ]
  var a2 = animals.map(function(animals){
      return animals.name
  })
  var b2 = animals.map((animals)=>animals.name)
  var c2 = animals.map((animals)=>animals.name+'is a '+animals.species)
//console.log(c2)

//reduce functions - can do any array transformation

var orders =[
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325}
]

var total = orders.reduce((sum,orders)=>sum + orders.amount,0)

console.log(total)



