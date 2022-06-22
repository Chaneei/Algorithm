const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  const fuel = distanceToPump / (mpg * fuelLeft);
  if (fuel <= 1) {
    return true;
  } else {
    return false;
  }
};
