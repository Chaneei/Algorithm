function correct(string) {
  const mistake = {5: 'S', 0: 'O', 1: 'I'}
  const fix = function(str) {
    return str in mistake ? mistake[str] : str;
  }
  return string.split('').map(fix).join('');
}
