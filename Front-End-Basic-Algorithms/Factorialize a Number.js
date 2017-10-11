function factorialize(num) {
    //Start off a base number to factorialize
    var result = 1;

    //Iterate through each integer leading up to num and multiply integer by base number
    for(var i =1;i<=num;i++){
      result *= i;
    } 
    return result;
  }
  
  factorialize(5);
  