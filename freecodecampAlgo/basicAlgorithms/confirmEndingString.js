function confirmEnding(str, target) {
    var size = str.length - target.length
    var newstr = str.slice(size,str.length)
    if(newstr == target){
        return true
    }else{
        return false
    }
  }


  //version 2
  function confirmEnding2(string, target) {
    if (string.substr(-target.length) === target) {
      return true;
    } else {
      return false;
    }
  }

  //version 3
  function confirmEnding3(string, target) {
    return string.endsWith(target); // 'Bastian'.endsWith('n')
  }
  
  console.log(confirmEnding3("Bastian", "n"))