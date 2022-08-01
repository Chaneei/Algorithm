function getCount(str) {
  let c=0;
  for(let i=0; i<str.length;i++){
    switch(str[i]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        c++;
        break;
        default:
        break;
    } 
  }
  return c;
}
