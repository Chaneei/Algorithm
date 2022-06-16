function DNAStrand(dna) {
  //your code here
  //   let sequence = {
  //     A: "T",
  //     T: "A",
  //     G: "C",
  //     C: "G",
  //   };
  //   return dna.replace(/A|T|G|C/g, function (matched) {
  //     return sequence[matched];
  //   });
  var dnaArr = dna.split("");
  for (var i = 0; i < dnaArr.length; i++) {
    if (dnaArr[i] === "A") {
      dnaArr[i] = "T";
    } else if (dnaArr[i] === "T") {
      dnaArr[i] = "A";
    } else if (dnaArr[i] === "C") {
      dnaArr[i] = "G";
    } else if (dnaArr[i] === "G") {
      dnaArr[i] = "C";
    }
  }
  var lastValue = dnaArr.join("");
  return lastValue;
}

console.log(DNAStrand("ACGGTT"));
