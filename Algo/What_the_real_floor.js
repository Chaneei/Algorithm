function getRealFloor(n) {
  if(n<=0){
   return undefined; 
  }else if(n==1){
    return 0
  }else if(n>1 && n<13){
    return n-1;
  }else if(n>=13){
    return n-2;
  }
}
