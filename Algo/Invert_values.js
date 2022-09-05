function invert(array) {
  return array.map((i)=>{
    return i>=0 ? -Math.abs(i) : Math.abs(i)
  });
}
