function stray(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}
console.log(stray([12, 12, 12, 12, 12, 3, 12, 12, 12]));
