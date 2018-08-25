function truncateString(str, num) {
    var i,newstr="";
    if(str.length>num){
        for(i=0;i<num;i++){
            if(str[i]==" " && i==num-1){
                newstr += "..."
            }else if(i==num-1){
                newstr += `${str[i]}...`
            }else{
                newstr += str[i]
            }
        }
    }else{
        return str;
    }
    return newstr;
  }
  
  function truncateString2(str, num) {
      if (str.length > num) {
          return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }
    console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 8))