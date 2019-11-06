console.log(squareroot(9))

function loop(lo, hi, delta) {
   while (hi - lo > delta) {
    var mid = (lo + hi) / 2.0
    if (mid * mid > number) hi = mid
    else lo = mid
  }
   return [lo, hi]
}

function squareroot(number) {
   let unused = "hello"
  let lo = 0
  let hi = number
  const delta = 0.1
  const [lo, hi] = loop(lo, hi, delta)
  return hi
}


