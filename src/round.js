// Copyright 2015 JC Fisher

// CONVERT a number to a fixed precision.
export default function round(number, precision) {
  return +number.toFixed(precision);
}
