function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// # Start of string
//      (?= # Assert that the following regex can be matched here:
//     [0-9]* # any number of digits (and nothing but digits)
//     $ # until end of string ) # (End of lookahead)
//     (?: # Match either
//     .{4} # 8 characters | # or
//     .{6} # 11 characters ) # (End of alternation)
//     $ # End of string

console.log(validatePIN("1545"));
