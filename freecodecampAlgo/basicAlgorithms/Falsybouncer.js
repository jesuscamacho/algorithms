function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newarr = arr.filter((x) => {
        if(x != false && x != null && x != 0 && x != ""
        && x != undefined && x != NaN){
            return x
        }
    })
    return newarr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]))

  //filter out all false values