function squareroot(number) {
  let lo = 0
  let hi = number
  const delta = 0.1
  while (hi - lo > delta) {
    var mid = (lo + hi) / 2.0
    if (mid * mid > number) hi = mid
    else lo = mid
  }
  return hi
}

console.log(squareroot(9))
