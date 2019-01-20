module.exports = (numberFrom1to100) => {
  if (numberFrom1to100 <= 45) {
    return { min: 0, max: 20 };
  } else if (numberFrom1to100 >= 46 && numberFrom1to100 <= 70) {
    return { min: 20, max: 40 };
  } else if (numberFrom1to100 >= 71 && numberFrom1to100 <= 85) {
    return { min: 40, max: 60 };
  } else if (numberFrom1to100 >= 86 && numberFrom1to100 <= 95) {
    return { min: 60, max: 80 };
  } else {
    return { min: 80, max: 100 };
  }
}