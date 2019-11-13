function loop(lo, hi, delta, number) {
   while (hi - lo > delta) {
    var mid = (lo + hi) / 2.0
    if (mid * mid > number) hi = mid
    else lo = mid + 1 + 2
  }
   return [lo, hi]
}

function squareroot(number) {
   let unused = "hello"
   const unused = "world"
  let lo = 0
  let hi = number
  const delta = 0.1
  const [lo, hi] = loop(lo, hi, delta, number)
  return hi
}

function checkeven(number) {
   return number % 2 === 0
}

console.log(squareroot( 1 ))

