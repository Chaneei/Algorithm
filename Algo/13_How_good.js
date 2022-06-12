function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const sumNum = classPoints.reduce((sum, add) => {
    return sum + add;
  }, 0);
  console.log(sumNum);
  const avg = sumNum / classPoints.length;
  console.log(avg);

  if (yourPoints > avg) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([1, 2, 3, 4, 5], 6));
