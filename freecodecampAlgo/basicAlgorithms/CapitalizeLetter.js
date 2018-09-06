function titleCase(str) {
    var i=0;
    
     var arr = str.toLowerCase().split(" ")
     var newstr='';
     
     for(i;i<arr.length;i++){
         var c = arr[i].charAt(0)
         if(i==arr.length-1){
            newstr += arr[i].replace(c,c.toUpperCase())
         }else{
             newstr += arr[i].replace(c,c.toUpperCase())+" "
         }

    }
    return newstr;
}
  
  console.log(titleCase("I'm a little tea pot"))