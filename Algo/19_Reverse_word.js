function reverseWords(str) {
  // Go for it
  revStr = str.split("").reverse().join("").split(" ").reverse().join(" ");

  return revStr;
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
