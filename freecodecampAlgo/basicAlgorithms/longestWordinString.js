function findLongestWordLength(str) {
var i,count = 0,words  = 0;
for(i=0;i<str.length;i++){
  if(str[i]==(' ') || i == str.length-1){
    if(count>words && i == str.length-1){
      words = count
      words++
    }else if(count>words){
      words = count
    }
    count = 0
  }else{
    count++
  }
}
    return words;
  }


//uses spilce method
  function findLongestWordLength2(str) {
    var strSplit = str.split(' ')
    var i,count=0;
    for(i=0;i<strSplit.length-1;i++){
      if(count<strSplit[i].length){
        count = strSplit[i].length
      }
    }
    return count;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
  console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"))