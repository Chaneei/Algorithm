function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let dnaArr = dna.split("");
  for (let i = 0; i < dnaArr.length; i++) {
    if (dnaArr[i] === "T") dnaArr[i] = "U";
  }
  let lastValue = dnaArr.join("");
  return lastValue;
}
