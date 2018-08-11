function repeatStringNumTimes(str, num) {
    var newstr =''
    if(num==0){
        return ""
    }else{
        for(var i=0;i<num;i++){
            newstr +=str
        }
    }
    return newstr;
  }

//recussion
function repeatStringNumTimes2(str, num) {
    if(num==0){return ""}
    else if(num == 0){
        return str
    }else{
       return str+ repeatStringNumTimes2(str,num-1)
    }
}

//repeat method  
function repeatStringNumTimes3(string, times) {
    if (times > 0){return string.repeat(times)}
    else{ return ""}
  }
  console.log(repeatStringNumTimes3("abc", 3))
